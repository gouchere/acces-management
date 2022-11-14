import LockIcon from '@mui/icons-material/Lock';

const ItemsRessources=({item1, padding})=>{
    const className=padding?"item item-padding":"item"
    return(
            <div className={className}>
                <div>
                    <h1>
                        <span className='title-resource'>{item1.page.title}</span>
                        <span className='type-resource'>M</span>
                    </h1>
                    <p>lorem impsum docolor lorem impsum docolor </p>
                </div>
                
                <span className='ico'><LockIcon fill='red' /></span>
            </div>
    )
}

export default ItemsRessources