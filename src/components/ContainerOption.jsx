const { __ } = wp.i18n;
const { SelectControl  } = wp.components

const ContainerOption = ( { attributes, setAttributes } ) => {
    const { container } = attributes
        
    return (
        <SelectControl
            label={ __( 'Container Option', 'egov' ) }
            value={ container }
            options={ [
                { label: __( 'No Container', 'egov' ), value: '' },
                { label: __( 'Container', 'egov' ), value: 'container' },
                { label: __( 'Container SM', 'egov' ), value: 'container-sm' },
                { label: __( 'Container MD', 'egov' ), value: 'container-md' },
                { label: __( 'Container LG', 'egov' ), value: 'container-lg' },
                { label: __( 'Container XL', 'egov' ), value: 'container-xl' },
                { label: __( 'Container Fluid', 'egov' ), value: 'container-fluid' }
            ] }
            onChange={ ( value ) => { setAttributes( { container: value } ) } }
        />
    )
}

export default ContainerOption;