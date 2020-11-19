const { __ } = wp.i18n
const { InnerBlocks } = wp.blockEditor
const NestedButton = ( { allowedBlocks } ) => {
    return (
        <InnerBlocks 
            orientation="horizontal"
            allowedBlocks={ allowedBlocks }
        />
    )
}
export default NestedButton;