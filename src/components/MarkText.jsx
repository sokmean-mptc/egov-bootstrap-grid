const { __ } = wp.i18n;
const { TextControl } = wp.components

const MarkText = ( { attributes, setAttributes } ) => {
    const { mark_text } = attributes

    return (
        <TextControl
            label= { __( 'Mark Text', 'egov' ) }
            value={ mark_text }
            onChange={ ( value ) => setAttributes( { mark_text: value } ) }
        />
    )
}

export default MarkText;