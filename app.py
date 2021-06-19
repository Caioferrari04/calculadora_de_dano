from flask import Flask,render_template
from random import randint
app = Flask(__name__)

@app.route("/")
def home():
    tanques = [
        {
            'tipo': 'Puma',
            'imagem': 'static/images/germ_sdkfz_234_2.png',
            'vida': 20
        },
        {
            'tipo': 'Tiger',
            'imagem': 'static/images/germ_pzkpfw_vi_ausf_e_tiger.png',
            'vida': 40
        },
        {
            'tipo': 'Maus',
            'imagem': 'static/images/germ_pzkpfw_maus.png',
            'vida': 60
        }
    ]
    municoes = [
        {
            'tipo': 'APHEBC',
            'imagem': 'static/images/ShellAPHE.png',
            'dano': 35
        },
        {
            'tipo': 'HE',
            'imagem': 'static/images/ShellHE.png',
            'dano': 15
        },
        {
            'tipo': 'APFSDS',
            'imagem': 'static/images/ShellAPFSDS.png',
            'dano': 55
        }
    ]
    return render_template(
        
        "index.html",
        tanques = tanques,
        municoes = municoes

    )

if __name__=="__main__":
    app.run(debug=True)