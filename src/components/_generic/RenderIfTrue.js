const RenderIfTrue = ({cnd = true, children, fb=null}) => {
    return (
        cnd ? children : fb
    )
};

export default RenderIfTrue;
