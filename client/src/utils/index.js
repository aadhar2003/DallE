import { surpriseMePrompts } from "../constants";
import FileSaver from 'file-saver';
export const getRandomPrompt=(prompt)=>{
    const index=Math.floor(Math.random()*surpriseMePrompts.length);
    const RandomPrompt=surpriseMePrompts[index];
    if(RandomPrompt==prompt){
        return getRandomPrompt(prompt);
    }
    return RandomPrompt;

}

export async function downloadImage(_id,photo){
FileSaver.saveAs(photo,`download-${_id}.jpg`)
}