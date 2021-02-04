import React from 'react'
import Person from './Person';

function NameList() {
    const names = ['Bruice','Diana','Clark','Bruice']
    const list = names.map((name,index)=><h2  key={index}>{name}  {index}</h2>)
    const persons = [
        {
            id : 1,
            name : 'Bruce',
            age : 30,
            skill : 'Java'
        },
        {
            id : 2,
            name : 'Daniel',
            age : 20,
            skill : 'Java 8'
        },
        {
            id : 3,
            name : 'Clark',
            age : 33,
            skill : 'Java 14'
        }
    ]

    const personList = persons.map(person=> 
        <Person key={person.id} person={person}/>
        )

    return (
        <div>
            {list}
        </div>
    )
}

export default NameList
