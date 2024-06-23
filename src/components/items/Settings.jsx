import SettingIcon from '../../assets/settings-icon.svg'
import QuestionIcon from '../../assets/question-icon.svg'

const Settings = () => {
    return (
        <div className="flex gap-6.5 bg-brand-1100 p-5 rounded-md max-w-max">
            <div className="filter-item w-xxxs h-xs border rounded-xl flex justify-center items-center cursor-pointer border-filter-item-border-color hover:bg-brand-950">
                <img src={ SettingIcon } alt="" />
            </div>
            <div className="filter-item w-xxxs h-xs border rounded-xl flex justify-center items-center cursor-pointer border-filter-item-border-color hover:bg-brand-950">
                <img src={ QuestionIcon } alt="" />
            </div>
        </div>
    )
}

export default Settings