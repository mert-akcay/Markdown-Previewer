import { useState } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'


function Context() {
    const [text,setText] = useState("#This is user input")
    const [isShowingHelp,setIsShowingHelp] = useState(false)
    var markdown = require( "markdown" ).markdown;
    const help = `
Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`.

Shopping list:

    * apples
    * oranges
    * pears

Numbered list:

    1. apples
    2. oranges
    3. pears


The rain---not the reign---in
Spain.

*[Mert Akcay](https://github.com/mert-akcay)*`

    const parsedText = isShowingHelp? markdown.toHTML(help) : markdown.toHTML(text) ;
    const processedText = { __html: parsedText };
    
    const setHelp = () => {
        isShowingHelp ? setIsShowingHelp(false) : setIsShowingHelp(true)
    }


    return (
        <div>
            <div onClick={setHelp} className={`help-button ${isShowingHelp && 'active'}`}><FontAwesomeIcon aria-hidden={true} icon={faQuestion}/></div>
            <h1 className="title">Markdown Previewer</h1>
            <div className="text-panels">
                <textarea value={isShowingHelp?help:text} readOnly={isShowingHelp} onChange={(e)=>setText(e.target.value)} class="text-panel-left"/>
                <div class="text-panel-right" dangerouslySetInnerHTML={processedText}></div>
            </div>
            <footer>
            <div>2021, created by <a className='nameT' target="blank" href="https://github.com/Mert-Akcay">Mert Akcay</a></div>
            </footer>
        </div>
    )
}

export default Context
