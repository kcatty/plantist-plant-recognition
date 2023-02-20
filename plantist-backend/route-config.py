from PIL import Image
from flask import Flask, jsonify, request
from flask_cors import cross_origin
from tensorflow import keras
from dataset_info import class_names

app = Flask(__name__)
model = keras.models.load_model("model.h5")


def preprocess_image(image, target_size):
    image = image.resize(target_size)
    return image


def get_prediction(image):
    processed_image = preprocess_image(image, target_size=(224, 224))
    predicted_idx = model.predict(processed_image)
    return str(class_names[int(predicted_idx[0][0])])


@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    data = {"success": False}
    if request.method == 'POST':
        file = request.files['filename']
        if file is None:
            return jsonify(data)
        image = Image.open(file)
        data["class_name"] = get_prediction(image=image)
        data["success"] = True
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=False, use_reloader=False, port=8080)
