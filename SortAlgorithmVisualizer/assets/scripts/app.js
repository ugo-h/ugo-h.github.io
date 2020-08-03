import { bubbleSort } from './sort/bubbleSort.js';
import { selectionSort } from './sort/selectionSort.js';
import { insertionSort } from './sort/insertionSort.js';
import { mergeSort } from './sort/mergeSort.js';
import { quickSort } from './sort/quickSort.js';
import { renderArr, generateArr, HEIGHT, WIDTH} from './arrayRender.js';
import {highlightSorted, renderSortStep } from './render.js'


const root = document.getElementById('root');
const backdrop = document.querySelector('.backdrop');
const slideInMenu = document.querySelector('.slider-menu')
const sortBtn = document.querySelector('.btn-sort');
const selectSortBtn = document.querySelector('.btn-select');
const arraySizeRange = document.getElementById('array-size-range');
const arraySpeedRange = document.getElementById('array-speed-range');

const arr1 = [2, 10, 7, 3, 1, 6, 20, 12, 13, 11, 5];
const arr2 = generateArr(30);

let delay = 200;
let currentSort = 'bubble';

const sortTypes = {
    'bubble': bubbleSort,
    'selection': selectionSort,
    'insertion': insertionSort,
    'merge': mergeSort,
    'quick': quickSort,
};

root.setAttribute('height', HEIGHT);
root.setAttribute('width', WIDTH);



renderArr(arr2);
let arrElements = [...document.querySelectorAll('g')];

sortBtn.addEventListener('click', sortHandler);
arraySizeRange.addEventListener('input', arrSizeHandler);
arraySpeedRange.addEventListener('input', sortSpeedHandler);
selectSortBtn.addEventListener('click', ()=> {
    slideInMenu.style.display = 'block';
    setTimeout(()=>{
        slideInMenu.classList.toggle('hidden')
        backdrop.classList.toggle('removed');
    }, 100)
});
backdrop.addEventListener('click', ()=>{
    slideInMenu.classList.toggle('hidden')
    backdrop.classList.toggle('removed');
    setTimeout(() => {
        slideInMenu.style.display = 'none'
    }, 300);
})
slideInMenu.addEventListener('click', (event)=> {
    if(event.target.tagName==='LI'){
        console.log('yeah!', event.target)
        currentSort = event.target.id;
        selectSortBtn.innerText = currentSort + ' sort';
        sortBtn.disabled = false;
        
        slideInMenu.classList.add('hidden')
        backdrop.classList.add('removed');
        setTimeout(() => {
            slideInMenu.style.display = 'none'
        },300);

        if(currentSort === 'merge') {
            useAdditionalSpace();
        }else{
            useNormalSpace();
        };
    }
})


function arrSizeHandler(event) {
    const volume = parseInt(event.target.value);
    const arr = generateArr(volume);
    renderArr(arr);
    arrElements = [...document.querySelectorAll('g')];
    if(currentSort === 'merge') {
        useAdditionalSpace();
    }else{
        useNormalSpace();
    };
}

function sortSpeedHandler(event) {
    const volume = parseInt(event.target.value);
    delay = 602 - volume;
    if( volume > 300) {
        if(currentSort!='merge'){
            root.classList.remove('animated');
        }
    }else{
        root.classList.add('animated');
    }
}

function sortHandler() {
    if(WIDTH <= 300){
        setTimeout(()=>{
            sortBtn.classList.add('removed');
            selectSortBtn.classList.add('removed');
            arraySizeRange.classList.add('removed');
            document.getElementById('size-label').classList.add('removed');
            document.querySelector('header').style.height = '150px';
        }, 100)
       
    }
    sortBtn.disabled = true;
    selectSortBtn.disabled = true;
    arraySizeRange.disabled = true;
    sortBtn.innerText = 'sorting...';
    
    const sortingAlgorithm = sortTypes[currentSort](arrElements, 0, arrElements.length-1);
    const timeout = setTimeout(sortVisualizer.bind(null, sortingAlgorithm), delay);
}

function sortVisualizer(sortingAlgorithm) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(sortingAlgorithm.next())
        }, delay*0.2)
    })
    .then((data)=>{
        const {value, done} = data;
        console.log(done)
        if(!done) {
            setTimeout(sortVisualizer.bind(null, sortingAlgorithm), delay);
            
        }else{
            if(WIDTH <= 300){
                setTimeout(()=>{
                    sortBtn.classList.remove('removed');
                    selectSortBtn.classList.remove('removed');
                    arraySizeRange.classList.remove('removed');
                    document.getElementById('size-label').classList.remove('removed');
                    document.querySelector('header').style.height = '300px';
                }, 1300);
               
            }
            sortBtn.innerText = 'SORT';
            sortBtn.disabled = false;
            arraySizeRange.disabled = false;
            selectSortBtn.disabled = false;
            const  finalRun = highlightSorted(arrElements);
            const finalRunInterval = setInterval(()=>{
                const {done} =  finalRun.next();
                if(done) {
                    clearInterval(finalRunInterval);
                    console.log('done')
                    const tempArr = []
                    arrElements.forEach((el)=>{
                        tempArr.push(el.dataset.size)
                    })
                    console.log(tempArr);
                }
            }, 30 * 10/arrElements.length);
            return;
        };
        new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log(value)
                resolve(renderSortStep(...value));
            }, delay*0.6)
            
        }).then(()=> {return});
    })
}

function useAdditionalSpace() {
    arrElements.forEach((el) => {
        el.lastChild.setAttribute('height', el.dataset.size/2.5);
    })
}

function useNormalSpace() {
    arrElements.forEach((el) => {
        el.lastChild.setAttribute('height', el.dataset.size);
    })
}