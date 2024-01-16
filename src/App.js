import 'antd';
import{Button} from 'antd'
import { useState } from 'react';
import{PoweroffOutlined} from '@ant-design/icons';
import{Input} from 'antd';
import{UserOutlined} from '@ant-design/icons';
import{Select} from 'antd';
import{Form,message,Alert} from 'antd';
import{DatePicker} from 'antd';
import{Spin} from 'antd';
import{Progress} from 'antd';
import './App.css';

function App() {
  
const fruits = ['Banana','Mango','Orange','Cherry']
const [showAlert,setShowAlert] = useState(false)
const onFinish=(e)=>{
  console.log(e)
  setTimeout(()=>{
    setShowAlert(true)
     message.success('Login successfully')
    // message.error('failed')
    // message.warning("something wrong")
  },2000);
}



  const [loading,setLoading] = useState(false)

  const onButtonClick = (e)=>{
    console.log('Button clicked')
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)

    },2000)
  }
 const [load,setLoad] = useState(false)


 
  return (
    <div className="App">
      <div className='Button'>
      <h1>Buttons in ANT design</h1>
      <Button type='primary'>Hello  Button</Button><br/><br/>
      <Button type='dashed'>Hello  Button dashed</Button><br/>
      <Button type='link' href='https://www.youtube.com'>Link Button</Button>
      <Button type='primary' block >Hello</Button><br/><br/>
      <Button type='primary'  loading={loading} onClick={onButtonClick} >Hello</Button><br/>
      <Button type='default' icon={<PoweroffOutlined/>} style={{backgroundColor:'orange',color:'red'}}>Button on off</Button>
      </div>
      <div className='Inputs'>
        <h1>Inputs fields in ANT design</h1>
        <Input placeholder='Name'maxLength={20} style={{width:'200px'}} allowClear></Input><br/>
        <Input type='password' placeholder='password' style={{width:'200px'}} allowClear></Input><br/>
        <Input placeholder='User'maxLength={20} style={{width:'200px'}} prefix={<UserOutlined/>} allowClear></Input><br/>
        <Input.Search placeholder='Name'maxLength={20} style={{width:'200px'}} allowClear></Input.Search><br/>
       
     
      </div>
      <div className='sele'>
        <h1>selections in ANT design</h1>
        <Select allowClear placeholder='Select fruit' style={{width:'30%'}}>
          {fruits.map((fruit,index)=>{
            return <Select.Option key={index} value={fruit}> {fruit}</Select.Option>
          })}
        </Select><br/>
        <Select  mode='multiple' allowClear placeholder='Select multi fruits fruit' style={{width:'30%'}}>
          {fruits.map((fruit,index)=>{
            return <Select.Option key={index} value={fruit}> {fruit}</Select.Option>
          })}
        </Select><br/>
        <Select  mode='multiple' maxTagCount={2}  allowClear placeholder='Select fruit with max count of 2 after then its shows +2' style={{width:'30%'}}>
          {fruits.map((fruit,index)=>{
            return <Select.Option key={index} value={fruit}> {fruit}</Select.Option>
          })}
        </Select>

      </div>
      <div className='form'>
        <h1>Form Component in ANT</h1>
        {showAlert&&
         <Alert type='error' message='error' description='there was an error on login' style={{width:'50%',marginLeft:'25%'}}closable/>
        }
       <Form onFinish={onFinish}>
       <Form.Item >
          <label>User Name</label><br/>
          <Input placeholder='enter your user name'prefix={<UserOutlined/>} required style={{width:'50%'}}></Input>
        </Form.Item>
        <Form.Item >
          <label>Password</label>
          <br/>
          <Input.Password placeholder='enter your password' required  style={{width:'50%'}}></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button   type='primary' htmlType='submit'  style={{width:'50%'}}>Login</Button>
        </Form.Item>

       </Form>

      </div>

      <div className='datapicker'>
        <h1>DatePicker in ANTD</h1>
        <DatePicker/>
        {/* multiple data 'pickers' picker='month' picker='year' picker='quarter' */}
        <DatePicker picker='month'/>
        <DatePicker  picker='year'/>
        <DatePicker picker='quarter'/>
        {/* RangePicker used to pick the from starting date and ending date and its had multiple pickers */}
        <DatePicker.RangePicker/>
        <DatePicker.RangePicker picker='month' disabledDate={20}/>
        <DatePicker.RangePicker picker='year'/>
        <DatePicker.RangePicker picker='quarter'/>
      </div>
     
     <div className='spin'>
      <h1> Spin in antd</h1>
      <Spin spinning={true} ></Spin><br/>
      {/* <Spin spinning={false} ></Spin> */}
      <Spin spinning={load}></Spin>
      <Button onClick={()=>{ setLoad(preValue=>!preValue) }}>Toggle spinning</Button>

      <Spin spinning={load}>
        <p>hello</p>
        <p>svsg</p>
        <p>Jack</p>
      </Spin>
     </div>
     <div className='progress'>
      <h1>Progress</h1>
      <Progress   percent={33} style={{width:'50%'}} status='active'></Progress>
      <Progress   percent={33}  type='circle'style={{width:'50%'}} status='active'></Progress>
      <Progress   percent={33}  strokeColor='red' style={{width:'50%'}} status='active'></Progress>
      <Progress   percent={33}  strokeColor='red' strokeWidth={50} style={{width:'50%'}} status='active'></Progress>
      <Progress   percent={33}  type='circle'style={{width:'50%'}} status='success'></Progress>
      <Progress   percent={33}  type='circle'style={{width:'50%'}} status='exception'></Progress>
      <Progress   percent={33}  type='line'style={{width:'50%'}} status='success' ></Progress>
      <Progress   percent={33}  type='line'  steps={3} ></Progress>
      
      




     </div>
    
     
    
    </div>
  );
}

export default App;
