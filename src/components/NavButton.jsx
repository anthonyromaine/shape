export default function NavButton({text, Icon}){
    return <button className='inline-flex items-center justify-center text-neutral-500 border-2 font-bold border-neutral-500 rounded-md w-28 py-2 hover:bg-amber-500 hover:border-amber-500 hover:text-neutral-800'><Icon /><span className="ml-2">{text}</span></button>;
}