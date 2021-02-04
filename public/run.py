from flask import Flask,render_template,request,redirect,url_for
from werkzeug.utils import secure_filename
import os
from flask import send_from_directory,flash,jsonify
from werkzeug.middleware.shared_data import SharedDataMiddleware
from get_file import getDataByName

UPLOAD_FOLDER = 'uploads'  
ALLOWED_EXTENSIONS = set(['jpg','png']) 

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 5 * 1024 * 1024

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/VisualLink/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            result = dict()
            result['filename'] = "%s" % filename
            result['src'] = 'uploads/'+filename 
            return jsonify(result)
    return ''
    
@app.route('/dealImage/', methods=['GET', 'POST'])
def deal_file():
    if request.method == 'POST':
        fileName = request.form.to_dict()['fileName']
        content = request.form.to_dict()['text']
        if fileName == '' or content == '':
            flash('No selected file')
            return redirect(request.url)
        result = getDataByName(fileName)
        if result!= False:
            return result
        else:
            print(fileName,content)
            result = dict()
            result['filename'] = fileName
            result['content'] = content+' after deal with'
            result['src'] = 'uploads/'+fileName
            return jsonify(result)
    return ''

@app.route('/linkImage/', methods=['GET', 'POST'])
def link_file():
    if request.method == 'POST':
        fileName = request.form.to_dict()['fileName']
        content = request.form.to_dict()['text']
        if fileName == '' or content == '':
            flash('No selected file')
            return redirect(request.url)
        result = getDataByName(fileName)
        if result!= False:
            return result
        else:
            print(fileName,content)
            result = dict()
            result['filename'] = fileName
            result['content'] = content+' after deal with'
            result['src'] = 'uploads/'+fileName
            return jsonify(result)
    return ''

@app.route('/Example/', methods=['GET', 'POST'])
def deal_ex():
    if request.method == 'POST':
        fileName = request.form.to_dict()['fileName']
        if fileName == '':
            flash('No selected file')
            return redirect(request.url)
        result = getDataByName(fileName)
        if result!= False:
            return result
        else:
            print(fileName,"test example")
            result = dict()
            result['filename'] = fileName
            result['content'] = ' after deal with'
            result['src'] = 'uploads/'+fileName
            return jsonify(result)
    return ''


if __name__=="__main__":
    app.run(host='0.0.0.0',debug=True, port=5001)