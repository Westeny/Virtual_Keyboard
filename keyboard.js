'use strict'

const ROW_1 = ["IntlBackslash", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"]
const ROW_2 = ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU","KeyI", "KeyO", "KeyP", "BracketLeft" ,"BracketRight"]
const ROW_3 = ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Backslash", "Enter"]
const ROW_4 = [ "ShiftLeft", "Backquote", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"]
const ROW_5 = ["ControlLeft", "AltLeft", "MetaLeft", "Space", "MetaRight", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight"]

const ROW1_DIG_EN_NOT_SHIFTED = ['§', '1', '2', '3','4', '5', '6', '7','8', '9', '0', '-','=', 'Backspace'];
const ROW2_EN_NOT_SHIFTED = ['Tab','q', 'w', 'e', 'r','t', 'y', 'u', 'i','o', 'p', '[', ']'];
const ROW3_EN_NOT_SHIFTED = ['CapsLock','a', 's', 'd', 'f','g', 'h', 'j', 'k','l', ';', "'", '\\', 'Enter'];
const ROW4_EN_NOT_SHIFTED = ['Shift','`', 'z', 'x', 'c','v', 'b', 'n', 'm',',', '.', '/','▲', 'Shift'];
const ROW5_EN_NOT_SHIFTED = ['Ctrl', 'Option', 'Alt', 'Space', 'Alt','Option','◄','▼','►'];

const ROW1_DIG_RU_NOT_SHIFTED = ['ё', '1', '2', '3','4', '5', '6', '7','8', '9', '0', '-','=', 'Backspace'];
const ROW2_RU_NOT_SHIFTED = ['Tab','й', 'ц', 'у', 'к','е', 'н', 'г', 'ш','щ', 'з', 'х', 'ъ'];
const ROW3_RU_NOT_SHIFTED = ['CapsLock','ф',  'ы', 'в', 'а','п',  'р', 'о', 'о', 'л',  'д', 'ж', 'э','Enter'];
const ROW4_RU_NOT_SHIFTED = ['Shift',']','я', 'ч', 'с', 'м','и', 'т', 'ь', 'б','ю', '.','▲', 'Shift'];
const ROW5_RU_NOT_SHIFTED = ['Ctrl', 'Option', 'Alt', 'Space', 'Alt', 'Option','◄','▼','►'];

const ROW1_DIG_EN_SHIFTED = ['±', '!', '@', '#','$', '%', '^', '&','*', '(', ')', '_','+','Backspace']
const ROW2_EN_SHIFTED = ['Tab','Q', 'W', 'E', 'R','T', 'Y', 'U', 'I','O', 'P', '{', '}'];
const ROW3_EN_SHIFTED = ['CapsLock','A', 'S', 'D', 'F','G', 'H', 'J', 'K','L', ':', '"', '|','Enter'];
const ROW4_EN_SHIFTED = ['Shift','~', 'Z', 'X', 'C','V', 'B', 'N', 'M','<', '>', '?','▲', 'Shift'];
const ROW5_EN_SHIFTED = ['Ctrl', 'Option', 'Alt', 'Space', 'Alt', 'Option','◄','▼','►'];

const ROW1_DIG_RU_SHIFTED = ['Ё', '!', '"', '№',';', '%', ':', '?','*', '(', ')', '_','+','Backspace']
const ROW2_RU_SHIFTED = ['Tab','Й', 'Ц', 'У', 'К','Е', 'Н', 'Г', 'Ш','Щ', 'З', 'Х', 'Ъ'];
const ROW3_RU_SHIFTED = ['CapsLock','Ф', 'Ы', 'В', 'А','П', 'Р', 'О', 'Л','Д', 'Ж', 'Э', '/','Enter'];
const ROW4_RU_SHIFTED = ['Shift','[', 'Я', 'Ч', 'С','М', 'И', 'Т', 'Ь','Б', 'Ю', ',','▲', 'Shift'];
const ROW5_RU_SHIFTED = ['Ctrl', 'Option', 'Alt', 'Space', 'Alt', 'Option','◄','▼','►']

const ROW1 = {};
ROW1['name'] = ROW_1;
ROW1['en'] = ROW1_DIG_EN_NOT_SHIFTED;
ROW1['ru'] = ROW1_DIG_RU_NOT_SHIFTED;
ROW1['en_shift'] = ROW1_DIG_EN_SHIFTED;
ROW1['ru_shift'] = ROW1_DIG_RU_SHIFTED;

const ROW2 = {};
ROW2['name'] = ROW_2;
ROW2['en'] = ROW2_EN_NOT_SHIFTED;
ROW2['ru'] = ROW2_RU_NOT_SHIFTED;
ROW2['en_shift'] = ROW2_EN_SHIFTED;
ROW2['ru_shift'] = ROW2_RU_SHIFTED;

const ROW3 = {};
ROW3['name'] = ROW_3;
ROW3['en'] = ROW3_EN_NOT_SHIFTED;
ROW3['ru'] = ROW3_RU_NOT_SHIFTED;
ROW3['en_shift'] = ROW3_EN_SHIFTED;
ROW3['ru_shift'] = ROW3_RU_SHIFTED;

const ROW4 = {};
ROW4['name'] = ROW_4;
ROW4['en'] = ROW4_EN_NOT_SHIFTED;
ROW4['ru'] = ROW4_RU_NOT_SHIFTED;
ROW4['en_shift'] = ROW4_EN_SHIFTED;
ROW4['ru_shift'] = ROW4_RU_SHIFTED;

const ROW5 = {};
ROW5['name'] = ROW_5;
ROW5['en'] = ROW5_EN_NOT_SHIFTED;
ROW5['ru'] = ROW5_RU_NOT_SHIFTED;
ROW5['en_shift'] = ROW5_EN_SHIFTED;
ROW5['ru_shift'] = ROW5_RU_SHIFTED;

const BODY = document.querySelector('#body');

class Key {
  constructor(name, en, ru,en_shift, ru_shift) {
    this.name = name
    this.en_shift = en_shift;
    this.ru_shift = ru_shift;
    this.en = en;
    this.ru = ru;
  }
}
const createKey = (key_data) => {
  let key = document.createElement("div");
  key.classList.add("key");
  key.setAttribute('id',key_data['name'])
  
  let span_en= document.createElement("span");
  span_en.classList.add("key_en");
  span_en.textContent = key_data['en'];

  let span_ru = document.createElement("span");
  span_ru.classList.add("key_ru");
  span_ru.textContent = key_data['ru'];

  let span_ru_shift = document.createElement("span")
  span_ru_shift.classList.add("key_ru_shift")
  span_ru_shift.textContent = key_data['ru_shift'];

  let span_en_shift = document.createElement("span")
  span_en_shift.classList.add("key_en_shift")
  span_en_shift.textContent = key_data['en_shift'];
  
  key.append(span_en);
  key.append(span_ru);
  key.append(span_ru_shift);
  key.append(span_en_shift);
 
  return key;
}

const MAIN_WRAPPER = document.createElement('div');
MAIN_WRAPPER.classList.add('main_wrapper');

const TEXT_AREA = document.createElement('textarea');
TEXT_AREA.classList.add('text_area');

const KEYBOARD_WRAPPER = document.createElement('div');

const keyboard_1_row = document.createElement('div');
keyboard_1_row.classList.add('row')
const keyboard_2_row = document.createElement('div');
keyboard_2_row.classList.add('row')
const keyboard_3_row = document.createElement('div');
keyboard_3_row.classList.add('row')
const keyboard_4_row = document.createElement('div');
keyboard_4_row.classList.add('row')
const keyboard_5_row = document.createElement('div');
keyboard_5_row.classList.add('row')


const renderKeyRow = (row, row_container) =>{
  for (let i = 0; i < row['name'].length; i++){
    row_container.appendChild(createKey(new Key(row['name'][i], row['en'][i], row['ru'][i], row['en_shift'][i], row['ru_shift'][i])))
  }
  return row_container
}

renderKeyRow(ROW1, keyboard_1_row);
renderKeyRow(ROW2, keyboard_2_row);
renderKeyRow(ROW3, keyboard_3_row);
renderKeyRow(ROW4, keyboard_4_row);
renderKeyRow(ROW5, keyboard_5_row);

KEYBOARD_WRAPPER.appendChild(keyboard_1_row)
KEYBOARD_WRAPPER.appendChild(keyboard_2_row)
KEYBOARD_WRAPPER.appendChild(keyboard_3_row)
KEYBOARD_WRAPPER.appendChild(keyboard_4_row)
KEYBOARD_WRAPPER.appendChild(keyboard_5_row)



let info_text = document.createElement('p');
info_text.textContent = 'Переключение языка ALT + CTRL';


KEYBOARD_WRAPPER.classList.add('keyboard_wrapper')

MAIN_WRAPPER.appendChild(TEXT_AREA);
MAIN_WRAPPER.appendChild(KEYBOARD_WRAPPER);
MAIN_WRAPPER.appendChild(info_text)


BODY.appendChild(MAIN_WRAPPER);

let CapsLock = false;
let Shift = false;
let LayOut = 'key_en';
let Meta = false;

const checkLayOut = (LayOut) => {
if (LayOut == 'key_en'){
  document.querySelectorAll('span').forEach(element => element.classList[0] == 'key_en'? element.classList.remove('key_hidden'):element.classList.add('key_hidden'));
}
if (LayOut == 'key_ru'){
  document.querySelectorAll('span').forEach(element => element.classList[0] == 'key_ru'? element.classList.remove('key_hidden'):element.classList.add('key_hidden'));
}
if (LayOut == 'key_en_shift'){
  document.querySelectorAll('span').forEach(element => element.classList[0] == 'key_en_shift'? element.classList.remove('key_hidden'):element.classList.add('key_hidden'));
}
if (LayOut == 'key_ru_shift'){
  document.querySelectorAll('span').forEach(element => element.classList[0] == 'key_ru_shift'? element.classList.remove('key_hidden'):element.classList.add('key_hidden'));
}
}
const shiftLayOut = (layout) =>{
    if(layout == 'key_en'){return 'key_en_shift'}
    if(layout == 'key_en_shift'){return 'key_en'}
    if(layout == 'key_ru'){return 'key_ru_shift'}
    if(layout == 'key_ru_shift'){return 'key_ru'}
}
const changeLayOut = (layout) =>{
  if(layout == "key_en"){return 'key_ru'}
  if(layout == "key_ru"){return 'key_en'}
  if(layout == "key_ru_shift"){return 'key_en_shift'}
  if(layout == "key_en_shift"){return 'key_ru_shift'}
}
checkLayOut(LayOut)

KEYBOARD_WRAPPER.addEventListener('mousedown', (e) =>{
  console.log(Meta)
  if(e.target.classList =='row'){return}
  e.target.closest('div').classList.add('pressed')
  TEXT_AREA.focus()
  switch (e.target.closest('div').getAttribute('id')) {
    case 'Backspace':
      TEXT_AREA.value = TEXT_AREA.value.slice(0,-1);
      break;
    case 'Space':
      TEXT_AREA.value += ' ';
      break;
    case 'Enter':
      TEXT_AREA.value += '\n';
      break;
    case 'Tab':
      TEXT_AREA.value += '  ';
      break;
    case 'CapsLock':
      break;
    case "ControlLeft":
      if (e.metaKey == true || Meta == true){
        console.log(123)
        LayOut = changeLayOut(LayOut);
        console.log(LayOut)
        checkLayOut(LayOut);}
        break;
    case 'AltLeft':
      TEXT_AREA.value += '';
      break;
    case 'AltRight':
      TEXT_AREA.value += '';
      break;
    case 'MetaLeft':
      Meta = true;
      break;
    case 'MetaRight':
      Meta = true;
      break;
    case 'ShiftLeft':
      Shift = true;
      LayOut = shiftLayOut(LayOut);
      checkLayOut(LayOut);
      break;
     
    case 'ShiftRight':
      Shift = true;
      LayOut = shiftLayOut(LayOut);
      checkLayOut(LayOut);
      break;
    default:
      TEXT_AREA.value += e.target.closest('div').querySelector('.'+ LayOut).textContent;
      break;
  }
})

KEYBOARD_WRAPPER.addEventListener('mouseup', (e) =>{
  switch (e.target.closest('div').getAttribute('id')) {
    case 'MetaLeft':
      Meta = false;
      e.target.closest('div').classList.remove('pressed')

      break;
    case 'MetaRight':
      Meta = false;
      e.target.closest('div').classList.remove('pressed')
      break;
    case 'ShiftLeft':
      Shift = false;
      LayOut = shiftLayOut(LayOut);
      checkLayOut(LayOut);
      e.target.closest('div').classList.remove('pressed')
      break;
    case 'ShiftRight':
      Shift = false;
      LayOut = shiftLayOut(LayOut);
      checkLayOut(LayOut);
      e.target.closest('div').classList.remove('pressed')
      break;
    case 'CapsLock':
      if(CapsLock == true){
        CapsLock = false;
        e.target.closest('div').classList.remove('pressed')
      }
      break;
    default:
      e.target.closest('div').classList.remove('pressed')
      break;
  }
})
KEYBOARD_WRAPPER.addEventListener('mouseleave',(e) =>
e.target.closest('div').classList.remove('pressed')

)


window.addEventListener('keydown', (e) =>{
  if (e['code'] == 'Tab'){
    e.preventDefault();
    TEXT_AREA.value+='  ';
  }
  if (e.getModifierState('CapsLock') == true){
    Shift == true
    LayOut = shiftLayOut(LayOut);
    checkLayOut(LayOut);
  }
  if(e['code'] == 'ControlLeft' && (e.metaKey == true || Meta == true)){
     console.log('123')
    LayOut = changeLayOut(LayOut);
    checkLayOut(LayOut);
  }
  if(Shift == true){
    TEXT_AREA.value =  TEXT_AREA.value.slice(0,-1)
    TEXT_AREA.value += e['key'].toUpperCase()
  }
  if (e['code'] == 'ShiftLeft' || e['code'] == 'ShiftRight'){
    LayOut = shiftLayOut(LayOut)
    checkLayOut(LayOut)
    document.getElementById(e['code']).classList.add('pressed')
  }else{
    console.log(e)
    document.getElementById(e['code']).classList.add('pressed')
    TEXT_AREA.focus()
  }
})



window.addEventListener('keyup', (e) =>{
  if (e['code'] == 'ShiftLeft' || e['code'] == 'ShiftRight'){
    Shift = false;
    LayOut = shiftLayOut(LayOut)
    checkLayOut(LayOut)
  }
  document.getElementById(e['code']).classList.remove('pressed')
    if(Shift == true){TEXT_AREA.value = TEXT_AREA.value.slice(0,-1) + TEXT_AREA.value.slice(-1,).toUpperCase() }
})


