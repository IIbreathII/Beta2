from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import json
app = Flask(__name__)

# Разрешаем CORS
CORS(app)

# Загружаем секрет
load_dotenv()

db_password = os.getenv('DB_API')

# Ключ OpenAI (оставлен для примера, но не используется)
# client = OpenAI(api_key="")

@app.route('/TestInfo', methods=['GET'])
def get_ai_data():
    try:
        # Открываем файл db.json и читаем его содержимое
        with open('db.json', 'r') as f:
            data = json.load(f)  # Преобразуем JSON в Python-объект
        
        # Проверяем, является ли data объектом, и если да, оборачиваем его в массив
        if isinstance(data, dict):
            data = [data]  # Если это объект, оборачиваем его в массив

        # Отправляем данные как JSON-ответ
        response = jsonify(data)

        # Очищаем файл db.json после отправки данных
        

        return response

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Эндпоинт для загрузки данных (POST-запрос)
@app.route('/uploadTestinfo', methods=['POST'])
def upload_json():
    try:
        # Получаем данные из тела запроса
        data = request.get_json()
        
        # Проверяем, если данные есть
        if not data:
            return jsonify({"error": "No data provided"}), 400
        
        # Открываем файл и записываем данные
        with open('db.json', 'w') as f:
            json.dump(data, f, indent=4)  # Записываем данные в JSON формат
        
        # Возвращаем успешный ответ
        return jsonify({"message": "Data successfully written to file", "data": data}), 200
    
    except Exception as e:
        # Возвращаем ошибку в случае исключения
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
