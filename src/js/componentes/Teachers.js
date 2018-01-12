
import Teacher from './teacher.js'
import React,{Component} from 'react'
class Teachers extends Component {
    render(){
        return (<ul className="Teachers">
                  {this.props.data.teachers.map((teacherData)=>{
                      return <Teacher {...teacherData}/>
                  })}
                </ul>)      //esto es jsx aunque parezca html
    }
}

export default Teachers