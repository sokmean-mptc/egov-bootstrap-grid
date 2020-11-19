const { __ } = wp.i18n
const { SelectControl } = wp.components
const Column = ( { attributes, setAttributes } ) => {
    const { col, col_sm, col_md, col_lg, col_xl } = attributes
    return ( [
        <SelectControl
            label={ __( 'Column XS', 'egov' ) }
            value={ col }
            onChange={ ( col ) => setAttributes( { col } ) }
            options={ [
                { label: __( 'Auto', 'egov' ), value: 'col' },
                { label: __( '1', 'egov' ), value: 'col-1' },
                { label: __( '2', 'egov' ), value: 'col-2' },
                { label: __( '3', 'egov' ), value: 'col-3' },
                { label: __( '4', 'egov' ), value: 'col-4' },
                { label: __( '5', 'egov' ), value: 'col-5' },
                { label: __( '6', 'egov' ), value: 'col-6' },
                { label: __( '7', 'egov' ), value: 'col-7' },
                { label: __( '8', 'egov' ), value: 'col-8' },
                { label: __( '9', 'egov' ), value: 'col-9' }, 
                { label: __( '10', 'egov' ), value: 'col-10' },
                { label: __( '11', 'egov' ), value: 'col-11' },
                { label: __( '12', 'egov' ), value: 'col-12' }
            ] }
        />,
        <SelectControl
            label={ __( 'Column SM', 'egov' ) }
            value={ col_sm }
            onChange={ ( col_sm ) => setAttributes( { col_sm } ) }
            options={ [
                { label: __( 'Bypass', 'egov' ), value: '' },
                { label: __( 'Auto', 'egov' ), value: 'col-sm' },
                { label: __( '1', 'egov' ), value: 'col-sm-1' },
                { label: __( '2', 'egov' ), value: 'col-sm-2' },
                { label: __( '3', 'egov' ), value: 'col-sm-3' },
                { label: __( '4', 'egov' ), value: 'col-sm-4' },
                { label: __( '5', 'egov' ), value: 'col-sm-5' },
                { label: __( '6', 'egov' ), value: 'col-sm-6' },
                { label: __( '7', 'egov' ), value: 'col-sm-7' },
                { label: __( '8', 'egov' ), value: 'col-sm-8' },
                { label: __( '9', 'egov' ), value: 'col-sm-9' }, 
                { label: __( '10', 'egov' ), value: 'col-sm-10' },
                { label: __( '11', 'egov' ), value: 'col-sm-11' },
                { label: __( '12', 'egov' ), value: 'col-sm-12' }
            ] }
        />,
        <SelectControl
            label={ __( 'Column MD', 'egov' ) }
            value={ col_md }
            onChange={ ( col_md ) => setAttributes( { col_md } ) }
            options={ [
                { label: __( 'Bypass', 'egov' ), value: '' },
                { label: __( 'Auto', 'egov' ), value: 'col-md' },
                { label: __( '1', 'egov' ), value: 'col-md-1' },
                { label: __( '2', 'egov' ), value: 'col-md-2' },
                { label: __( '3', 'egov' ), value: 'col-md-3' },
                { label: __( '4', 'egov' ), value: 'col-md-4' },
                { label: __( '5', 'egov' ), value: 'col-md-5' },
                { label: __( '6', 'egov' ), value: 'col-md-6' },
                { label: __( '7', 'egov' ), value: 'col-md-7' },
                { label: __( '8', 'egov' ), value: 'col-md-8' },
                { label: __( '9', 'egov' ), value: 'col-md-9' }, 
                { label: __( '10', 'egov' ), value: 'col-md-10' },
                { label: __( '11', 'egov' ), value: 'col-md-11' },
                { label: __( '12', 'egov' ), value: 'col-md-12' }
            ] }
        />,
        <SelectControl
            label={ __( 'Column LG', 'egov' ) }
            value={ col_lg }
            onChange={ ( col_lg ) => setAttributes( { col_lg } ) }
            options={ [
                { label: __( 'Bypass', 'egov' ), value: '' },
                { label: __( 'Auto', 'egov' ), value: 'col-lg' },
                { label: __( '1', 'egov' ), value: 'col-lg-1' },
                { label: __( '2', 'egov' ), value: 'col-lg-2' },
                { label: __( '3', 'egov' ), value: 'col-lg-3' },
                { label: __( '4', 'egov' ), value: 'col-lg-4' },
                { label: __( '5', 'egov' ), value: 'col-lg-5' },
                { label: __( '6', 'egov' ), value: 'col-lg-6' },
                { label: __( '7', 'egov' ), value: 'col-lg-7' },
                { label: __( '8', 'egov' ), value: 'col-lg-8' },
                { label: __( '9', 'egov' ), value: 'col-lg-9' }, 
                { label: __( '10', 'egov' ), value: 'col-lg-10' },
                { label: __( '11', 'egov' ), value: 'col-lg-11' },
                { label: __( '12', 'egov' ), value: 'col-lg-12' }
            ] }
        />,
        <SelectControl
            label={ __( 'Column XL', 'egov' ) }
            value={ col_xl }
            onChange={ ( col_xl ) => setAttributes( { col_xl } ) }
            options={ [
                { label: __( 'Bypass', 'egov' ), value: '' },
                { label: __( 'Auto', 'egov' ), value: 'col-xl' },
                { label: __( '1', 'egov' ), value: 'col-xl-1' },
                { label: __( '2', 'egov' ), value: 'col-xl-2' },
                { label: __( '3', 'egov' ), value: 'col-xl-3' },
                { label: __( '4', 'egov' ), value: 'col-xl-4' },
                { label: __( '5', 'egov' ), value: 'col-xl-5' },
                { label: __( '6', 'egov' ), value: 'col-xl-6' },
                { label: __( '7', 'egov' ), value: 'col-xl-7' },
                { label: __( '8', 'egov' ), value: 'col-xl-8' },
                { label: __( '9', 'egov' ), value: 'col-xl-9' }, 
                { label: __( '10', 'egov' ), value: 'col-xl-10' },
                { label: __( '11', 'egov' ), value: 'col-xl-11' },
                { label: __( '12', 'egov' ), value: 'col-xl-12' }
            ] }
        />
    ] )
}
export default Column;