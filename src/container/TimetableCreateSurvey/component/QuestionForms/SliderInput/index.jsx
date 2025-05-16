import { useState, useEffect } from "react";
import styles from "./index.module.css";

export default function SliderInput({
  min = 0,
  max = 5,
  answer,
  question_id,
  onChange
}) {
  const [value, setValue] = useState(() => {
    return answer[question_id] || 0;
  });

  useEffect(() => {
    onChange(value);
  }, [value]);

  // 진행률 계산
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className={styles.wrapper}>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className={styles.slider}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, var(--color-blue-0) 0%, var(--color-blue-0) ${percent}%, var(--color-blue-0-opacity-10) ${percent}%, var(--color-blue-0-opacity-10) 100%)`
        }}
      />
      <div className={styles.labels}>
        {[...Array(max - min + 1)].map((_, i) => {
          const labelValue = min + i;
          return (
            <div key={labelValue} className={styles.label}>
              {labelValue}
            </div>
          );
        })}
      </div>
    </div>
  );
}