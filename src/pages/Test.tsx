import React, {useState} from 'react';
import SuperButton from "../c2-SuperButton/SuperButton";
import SuperCheckbox from "../c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "../c1-SuperInputText/SuperInputText";
import SuperSelect from "../c5-SuperSelect/SuperSelect";
import SuperRadio from "../c6-SuperRadio/SuperRadio";

const arr = ['x', 'y', 'z']
function Test() {
    const [checked, setChecked] = useState<boolean>(false)
    const [text, setText] = useState<string>('')
    const [value, onChangeOption] = useState(arr[1])
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    return (
    <div>
        <div>
            <SuperInputText
                value={text}
                onChangeText={setText}
                onEnter={showAlert}
                error={error}
            />
        </div>

        <div>
            <SuperButton>
                default
            </SuperButton>
        </div>

        <div>
            <SuperCheckbox
                checked={checked}
                onChangeChecked={setChecked}
            >
                some text {/*// этот текст попадёт в children*/}
            </SuperCheckbox>
        </div>

        <div>
            <SuperSelect
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
            />
        </div>

        <div>
            <SuperRadio
                name={'radio'}
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
            />
        </div>
    </div>
);
}

export default Test;