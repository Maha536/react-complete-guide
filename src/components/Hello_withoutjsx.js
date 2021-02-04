import React, { createElement } from 'react';

const Hello_withoutjsx = () => {
    return React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement('h1',null,"Hello, This is without using JSX"))
}

export default Hello_withoutjsx