import React, {useState, useEffect, useContext, useRef} from "react";
import {Context} from "../../store/context";
import {useNavigate} from 'react-router-dom';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import styles from "./style.module.scss";

const userValues = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    birthday: '',
}

const Info = () => {
    const userContext = useContext(Context).user;
    const user = userContext[0];
    const navigate = useNavigate();
    
    const [avatarSrc, setAvatarSrc] = useState('');
    const [values,setValues] = useState(userValues);
    const [disable,setDisable] = useState(true);
    const avatarInputRef = useRef();

    useEffect(() => {
        const user = sessionStorage.user ? JSON.parse(sessionStorage.user) : undefined
        if(user){
            userContext[1](user);
            setValues({
                ...values,
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                birthday: user.birthday,
            })
        }else{
            navigate('/');
        }
    }, [user.id,values.id]);

    const handleChangeInput = e =>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleEdit = () => {
        setDisable(false);
    }

    const handleGetFile = (e) => {
        setAvatarSrc(URL.createObjectURL(e.target.files[0]));
    }

    const handleChangeAvatar = () => {
        avatarInputRef.current.click();
    }

    const handleSave = () => {
        if(disable){
            console.log('hello');
            return;
        }
        //request API
    }

    return (
        <div className={styles.component}>
            <div className={styles.avatar}>
                <img 
                    alt="user avatar" 
                    src={avatarSrc}
                />
                <input 
                    ref={avatarInputRef} 
                    type="file" 
                    name="avatar" 
                    onChange={handleGetFile}
                    hidden
                />
                <PhotoCameraIcon 
                    className={styles.changeAvatarBtn}
                    onClick={handleChangeAvatar}
                />
            </div>
            <div className={styles.info}>
                <input 
                    placeholder="Name" 
                    value={values.name} 
                    name="name" 
                    disabled={disable}
                    onChange={handleChangeInput}
                />
                <input 
                    placeholder="Email" 
                    value={values.email} 
                    name="email" 
                    disabled={disable}
                    onChange={handleChangeInput}
                />
                <input 
                    placeholder="Phone" 
                    value={values.phone} 
                    name="phone" 
                    disabled={disable}
                    onChange={handleChangeInput}
                />
                <input 
                    placeholder="Address" 
                    value={values.address} 
                    name="address" 
                    disabled={disable}
                    onChange={handleChangeInput}
                />
                <input 
                    type="date" 
                    value={values.birthday} 
                    name="birthday" 
                    disabled={disable}
                    onChange={handleChangeInput}
                />

                <div className={styles.buttons}>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default Info;
