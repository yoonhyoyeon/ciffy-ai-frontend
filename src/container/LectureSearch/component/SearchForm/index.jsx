"use client";
import styles from './index.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import IconSearch from '@/assets/svg/icon_search.svg';

const SearchForm = ({ initialKeyword }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const [keyword, setKeyword] = useState(initialKeyword);

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (keyword.trim() === '') {
            setKeyword('');
            alert('검색어를 입력해주세요!');
            return;
        }
        const params = new URLSearchParams(searchParams);
        params.set('keyword', encodeURIComponent(keyword));
        router.push(`/lecture/search?${params.toString()}`);
    };
    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <input 
                value={keyword} 
                type="text" 
                placeholder="강의명 또는 교수님을 입력하세요"
                onChange={handleChange} 
            />
            <button className={styles.searchButton}>
                <IconSearch color="#06003A"/>
            </button>
        </form>
    );
};

export default SearchForm;