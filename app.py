from flask import Flask, render_template

app = Flask(__name__)
number = 0


@app.route('/')
def index():
    global number
    return render_template('index.html', number=number)


@app.route('/plus', methods=['POST'])
def plus():
    global number
    number += 1
    return {'number': number}


@app.route('/minus', methods=['POST'])
def minus():
    global number
    number -= 1
    return {'number': number}


if __name__ == '__main__':
    app.run()
