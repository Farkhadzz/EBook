import React from "react"

function Card({ product }) {
    const { description } = product;
    const words = description.split(' ');
    const limitedText = words.slice(0, 15).join(' ');

    return (
        <>
            <div className="product-card">
                <div className="badge">Hot</div>
                <div className="product-tumb">
                    <img src="https://i.imgur.com/xdbHo4E.png" />
                </div>
                <div className="product-details">
                    <span className="product-catagory">Women,bag</span>
                    <h4><a href="">Women leather bag</a></h4>
                    {/* // когда надо будет отображать описание из DB используйте limitedText : */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p> {/*limitedText*/}
                    <div className="product-bottom-details">
                        <div className="product-price"><small>$96.00</small>$230.99</div>
                        <div className="product-links">
                            <a href=""><i className="fa fa-heart"></i></a>
                            <a href=""><i className="fa fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;

// В функции Card мы ожидаем получить объект product через props. Этот объект содержит информацию о продукте, включая описание.
// Мы достаем описание продукта из объекта product и сохраняем его в переменной description.
// Затем мы разбиваем описание на отдельные слова, используя метод split(' '), который разделяет строку на массив строк по пробелам.
// После этого мы выбираем только первые 15 слов из массива words с помощью метода slice(0, 15) и объединяем их обратно в строку с помощью метода join(' '). Это и есть наш ограниченный текст, который мы хотим показать.
// Возвращаем JSX-элемент, который содержит структуру карточки продукта, но вместо полного описания мы выводим limitedText, который содержит только первые 15 слов.