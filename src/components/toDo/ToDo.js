import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import Delete from './delete/Delete';
import {Modal} from '../modal/Modal';
import './toDo.scss';

const ToDoItem = ({el, onChange, animateDeletingPoint}) => {
    return  (
        <li 
            key={el.key}
            className={`toDo__item toDo__added ${el.checked ? ' toDo__checked' : ''}`}
            data-item={el.key}
        >
                <input
                    className="toDo__checkbox" 
                    type="checkbox"
                    onChange={onChange}
                />
                <div className="toDo__text">{el.text}</div>
                <div className='toDo__btns'>
                    <button onClick={() => {
                        animateDeletingPoint(el.key);
                    }} className="toDo__delete"><Delete /></button>
                </div>
        </li>
    )
}

export const ToDo = () => {
    const [list, setList] = useState([]);
    const [text, setText] = useState('');
    // Состояние отображения модального окна
    const [viewModal, setViewModal] = useState(false);

    // Анимации удаления задачи
    const animateDeletingPoint = (point) => {
        setTimeout(() => setList(arr => arr.filter(item => item.key !== point)), 500);
        const deletedPoint = document.querySelector(`.toDo__item[data-item='${point}']`);
        deletedPoint.classList.add('toDo__deleted');
    };

    const handleChange = (el) => setList([...list.map(it => it.key !== el.key ? it : { key: el.key, checked: !el.checked, text: el.text})]);

    // Валидация на дублирующиеся задачи c учетом регистра, пробелов и сиймволов
    const listValidate = () => {
        const cleanInput = text.replace(/\W/g, '').toLowerCase();
        if (list.length === 0) return true;
        const hasDuplicate = list.some(item => {
            const cleanItem = item.text.replace(/\W/g, '').toLowerCase();
            return cleanInput === cleanItem;
        });
        return !hasDuplicate;
    }

    // Добавление новой задачи с проверкой на дублирование
    const addNewPoint = () => {
        if (listValidate()) {
            setList(prev => [...prev, { key: prev.length + 1, text, checked: false }]);
        } else {
            setViewModal(true);
        }
    }

    // Обработка решения пользователя в модальном окне
    const handleDecision = (result) => {
        if(viewModal && result !== null){
            if(result){
                setList(prev => [...prev, { key: prev.length + 1, text, checked: false }]);
            }
            setViewModal(false);
        }
    };

    const modalWindow = viewModal ? <Modal onDecision={handleDecision}/> : null;


    return (
        <div className="toDo__wrapper">
            <div className="toDo__header">
                <textarea 
                    className="toDo__input"
                    type="text"
                    placeholder="Write new to do"
                    onChange={e => setText(e.currentTarget.value)}
                />
                <button
                    onClick={() =>  addNewPoint()}
                    className="toDo__btn"
                >
                    Add
                </button>
            </div>

            <div className='toDo__content'>
                <h2 className='toDo__title'>Your to do list</h2>
                <ul className="toDo__list">
                    {list.map(el => <ToDoItem el={el} onChange={() => handleChange(el)} animateDeletingPoint={animateDeletingPoint}/>)}
                </ul>
            </div>
            {/* Использовал портал что бы модальное окно не было ограничено контейнером */}
            {createPortal(modalWindow, document.body)}
        </div>
    )
}