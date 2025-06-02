'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './index.module.css';
const SortSelect = ({sort}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log(searchParams);

  const handleChange = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', encodeURIComponent(e.target.value));
    router.push(`/lecture/search?${params.toString()}`);
  };

  return (
    <select className={styles.selectBox} value={sort} onChange={handleChange}>
      <option value="popular">많이 담은 순</option>
      <option value="rating">평점 순</option>
    </select>
  );
};

export default SortSelect;