import { EditorToolbarProps } from './types';
/**
 *  Toolbar组件
 */
export default function Toolbar(props: EditorToolbarProps) {
	let { left, right } = { ...props };

	return (
		<div className='min-h-[36px] h-9 p-1  rounded-tl-xl rounded-tr-xl bg-white flex flex-row box-content'>
			<div className=' align-middle flex flex-row items-center'>{left}</div>
			<div className='align-middle flex flex-row items-center ml-auto'>{right}</div>
		</div>
	);
}
