import Graduation from '@/container/Graduation';

export const metadata = {
    title: '졸업요건분석'
}

const data = [
    {
        id: 1,
    }
]

const GraduationPage = () => {
    return (
        <Graduation data={data}/>
    )
}

export default GraduationPage;