import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'
import Step1 from './question/step1';
import Final from './final'

const Routing = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addquestion" element={<Step1/>} />
        <Route path="/allquestion" element={<Step1 />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </>
  )
}

export default Routing;