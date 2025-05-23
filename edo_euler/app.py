from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def resolver():
    data = request.get_json()

    fname = data['funcion']
    x0 = float(data['x0'])
    y0 = float(data['y0'])
    h = float(data['h'])
    xn = float(data['xn'])

    try:
        cmd = [
            'octave', '--quiet', '--eval',
            f"euler_solver('{fname}', {x0}, {y0}, {h}, {xn})"
        ]
        subprocess.run(cmd, check=True)

        if not os.path.exists("resultado.csv"):
            return jsonify({"error": "No se generó el archivo de resultados"}), 500

        df = pd.read_csv("resultado.csv", header=None)
        puntos = [{"x": round(row[0], 4), "y": round(row[1], 4)} for row in df.values]

        return jsonify({"puntos": puntos})

    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Error al ejecutar Octave: {str(e)}"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5001)
