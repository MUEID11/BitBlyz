

const EmptyState = ({message, address, lable}) => {
    return (
        <div className="h-screen-[calc(100vh-116px)] gap-5 flex flex-col items-center pb-16 justify-center">
            <p>{message}</p>
        </div>
    );
};

export default EmptyState;