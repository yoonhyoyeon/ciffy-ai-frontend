import styles from "./index.module.css";
import { useState } from "react";

const ProfessorSearchSelect = ({ value, onChange }) => {
    const [search, setSearch] = useState("");
    
    const handleSelect = (name, major) => {
        onChange([...value, {name, major}]);
    }
    const handleDelete = (name, major) => {
        onChange(value.filter((item) => !(item.name === name && item.major === major)));
    }
    return (
        <div className={styles.container}>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSelect(search, '컴퓨터공학과');
                setSearch("");
            }}>
                <input 
                    type="text" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="교수님 이름을 입력하세요"
                />
            </form>
            <div className={styles.professorList}>
                {value.map((item, index) => (
                    <div key={index} className={styles.professorItem}>
                        <span>{item.name} 교수님 ({item.major})</span>
                        <img 
                            src="/images/icon_x_white.png" 
                            onClick={() => handleDelete(item.name, item.major)} 
                        />
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default ProfessorSearchSelect;