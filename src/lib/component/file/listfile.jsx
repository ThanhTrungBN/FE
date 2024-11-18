import Filesidebar from "./filesidebar";
import '../../../assets/index.css';
const ScrollableBox = () => {

    const fileInfo = {
        name: 'SampleFile.docx',
        size: '12.19 KB',
        file: {}
    };
    return (
        <div className="h-60 overflow-auto scrollbar-custom">
            <div className="p-1">
                <Filesidebar fileInfo={fileInfo} />
                <Filesidebar fileInfo={fileInfo} />
                <Filesidebar fileInfo={fileInfo} />
                <Filesidebar fileInfo={fileInfo} />
                <Filesidebar fileInfo={fileInfo} />
                <Filesidebar fileInfo={fileInfo} />
                <Filesidebar fileInfo={fileInfo} />
            </div>
        </div>
    );
};

export default ScrollableBox;
