import logo from './logo.svg';
import './App.css';
import calculate from './calculation'

import { useState } from 'react';


// import "bootstrap/dist/css/bootstrap.min.css"

const But = () => {
    const [data, setData] = useState('');
    //   const [isLoading, setIsLoading] = useState(false);


    const handleClick_lbrac = async () => {
        setData(data + '(');
    };
    const handleClick_rbrac = async () => {
        setData(data + ')');
    };
    const handleClick_mod = async () => {
        setData(data + ' % ');
    };
    const handleClick_div = async () => {
        setData(data + ' / ');
    };
    const handleClick_7 = async () => {
        setData(data + '7');
    };
    const handleClick_8 = async () => {
        setData(data + '8');
    };
    const handleClick_9 = async () => {
        setData(data + '9');
    };
    const handleClick_multi = async () => {
        setData(data + ' X ');
    };
    const handleClick_4 = async () => {
        setData(data + '4');
    };
    const handleClick_5 = async () => {
        setData(data + '5');
    };
    const handleClick_6 = async () => {
        setData(data + '6');
    };
    const handleClick_minus = async () => {
        setData(data + ' - ');
    };
    const handleClick_1 = async () => {
        setData(data + '1');
    };
    const handleClick_2 = async () => {
        setData(data + '2');
    };
    const handleClick_3 = async () => {
        setData(data + '3');
    };
    const handleClick_plus = async () => {
        setData(data + ' + ');
    };
    const handleClick_0 = async () => {
        setData(data + '0');
    };
    const handleClick_dot = async () => {
        setData(data + '.');
    };
    const handleClick_AC = async () => {
        setData('');
    };
    const handleClick_equal = async () => {
        setData(calculate(data));
    };

    // console.log(data);

    return (
        <div className='But' >

            <div class="screen">
                <h1 class="calculation">{data}</h1>
            </div>

            <button type="button" class="btn " onClick={handleClick_lbrac}>(</button>
            <button type="button" class="btn " onClick={handleClick_rbrac}>)</button>
            <button type="button" class="btn " onClick={handleClick_mod}>%</button>
            <button type="button" class="btn " onClick={handleClick_div}>/</button>

            <button type="button" class="btn" onClick={handleClick_7}>7</button>
            <button type="button" class="btn" onClick={handleClick_8}>8</button>
            <button type="button" class="btn" onClick={handleClick_9}>9</button>
            <button type="button" class="btn" onClick={handleClick_multi}>X</button>

            <button type="button" class="btn" onClick={handleClick_4}>4</button>
            <button type="button" class="btn" onClick={handleClick_5}>5</button>
            <button type="button" class="btn" onClick={handleClick_6}>6</button>
            <button type="button" class="btn" onClick={handleClick_minus}>-</button>

            <button type="button" class="btn" onClick={handleClick_1}>1</button>
            <button type="button" class="btn" onClick={handleClick_2}>2</button>
            <button type="button" class="btn" onClick={handleClick_3}>3</button>
            <button type="button" class="btn" onClick={handleClick_plus}>+</button>

            <button type="button" class="btn" onClick={handleClick_0}>0</button>
            <button type="button" class="btn" onClick={handleClick_dot}>.</button>
            <button type="button" class="btn-thin btn" onClick={handleClick_AC}>AC</button>
            <button type="button" class="btn" onClick={handleClick_equal}>=</button>
            {/* </div> */}

        </div>
    );
};

export default But;

