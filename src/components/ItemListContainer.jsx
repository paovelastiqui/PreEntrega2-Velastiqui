export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="flex">
          <a className="font-bold text-md text-primary dark:text-white" href="#home">{greeting}</a>
        </div>
    )
}