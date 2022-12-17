import io

import torch
import torchvision.transforms as transforms
from PIL import Image
from flask import Flask, jsonify, request
from flask_cors import cross_origin

from dataset_info import class_names

app = Flask(__name__)
model = torch.load('C:/Users/bieli_pc4qr7s/Documents/Code Parada.js/plantist/plantist/plantist-backend/model.pth')
model.eval()


def transform_image(image_bytes):
    my_transforms = transforms.Compose([transforms.Resize(255),
                                        transforms.CenterCrop(224),
                                        transforms.ToTensor(),
                                        transforms.Normalize(
                                            [0.485, 0.456, 0.406],
                                            [0.229, 0.224, 0.225])])
    image = Image.open(io.BytesIO(image_bytes))
    return my_transforms(image).unsqueeze(0)


def get_prediction(image_bytes):
    tensor = transform_image(image_bytes=image_bytes)
    outputs = model(tensor)
    _, pred = torch.max(outputs, 1)
    predicted_idx = str(class_names[pred])
    print(predicted_idx)
    return predicted_idx


@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    if request.method == 'POST':
        file = request.files['filename']
        img_bytes = file.read()
        class_name = get_prediction(image_bytes=img_bytes)
        return jsonify({'className': class_name})


if __name__ == '__main__':
    app.run(debug=False, use_reloader=False, port=8080)
