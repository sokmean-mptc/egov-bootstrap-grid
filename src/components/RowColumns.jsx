const { __ } = wp.i18n;
const { SelectControl } = wp.components
const RowColumns = ( { attributes, setAttributes } ) => {
    const { row_cols, row_cols_sm, row_cols_md, row_cols_lg, row_cols_xl } = attributes
    return ( [
        <SelectControl
            label={ __( 'Row Columns XS', 'egov' ) }
            value={ row_cols }
            onChange={ ( row_cols ) => setAttributes( { row_cols } ) }
            options={ [
                { label: __( 'Auto', 'egov' ), value: '' },
                { label: __( '1', 'egov' ), value: 'row-cols-1' },
                { label: __( '2', 'egov' ), value: 'row-cols-2' },
                { label: __( '3', 'egov' ), value: 'row-cols-3' },
                { label: __( '4', 'egov' ), value: 'row-cols-4' },
                { label: __( '5', 'egov' ), value: 'row-cols-5' },
                { label: __( '6', 'egov' ), value: 'row-cols-6' }
            ] }
        />,
        <SelectControl
            label={ __( 'Row Columns SM', 'egov' ) }
            value={ row_cols_sm }
            onChange={ ( row_cols_sm ) => setAttributes( { row_cols_sm } ) }
            options={ [
                { label: __( 'Bypass', 'egov' ), value: '' },
                { label: __( '1', 'egov' ), value: 'row-cols-sm-1' },
                { label: __( '2', 'egov' ), value: 'row-cols-sm-2' },
                { label: __( '3', 'egov' ), value: 'row-cols-sm-3' },
                { label: __( '4', 'egov' ), value: 'row-cols-sm-4' },
                { label: __( '5', 'egov' ), value: 'row-cols-sm-5' },
                { label: __( '6', 'egov' ), value: 'row-cols-sm-6' }
            ] }
        />,
        <SelectControl
            label={ __( 'Row Columns MD', 'egov' ) }
            value={ row_cols_md }
            onChange={ ( row_cols_md ) => setAttributes( { row_cols_md } ) }
            options={ [
                { label: __( 'Bypass', 'egov' ), value: '' },
                { label: __( '1', 'egov' ), value: 'row-cols-md-1' },
                { label: __( '2', 'egov' ), value: 'row-cols-md-2' },
                { label: __( '3', 'egov' ), value: 'row-cols-md-3' },
                { label: __( '4', 'egov' ), value: 'row-cols-md-4' },
                { label: __( '5', 'egov' ), value: 'row-cols-md-5' },
                { label: __( '6', 'egov' ), value: 'row-cols-md-6' }
            ] }
        />,
        <SelectControl
            label={ __( 'Row Columns LG', 'egov' ) }
            value={ row_cols_lg }
            onChange={ ( row_cols_lg ) => setAttributes( { row_cols_lg } ) }
            options={ [
                { label: __( 'Bypass', 'egov' ), value: '' },
                { label: __( '1', 'egov' ), value: 'row-cols-lg-1' },
                { label: __( '2', 'egov' ), value: 'row-cols-lg-2' },
                { label: __( '3', 'egov' ), value: 'row-cols-lg-3' },
                { label: __( '4', 'egov' ), value: 'row-cols-lg-4' },
                { label: __( '5', 'egov' ), value: 'row-cols-lg-5' },
                { label: __( '6', 'egov' ), value: 'row-cols-lg-6' }
            ] }
        />,
        <SelectControl
            label={ __( 'Row Columns XL', 'egov' ) }
            value={ row_cols_xl }
            onChange={ ( row_cols_xl ) => setAttributes( { row_cols_xl } ) }
            options={ [
                { label: __( 'Bypass', 'egov' ), value: '' },
                { label: __( '1', 'egov' ), value: 'row-cols-xl-1' },
                { label: __( '2', 'egov' ), value: 'row-cols-xl-2' },
                { label: __( '3', 'egov' ), value: 'row-cols-xl-3' },
                { label: __( '4', 'egov' ), value: 'row-cols-xl-4' },
                { label: __( '5', 'egov' ), value: 'row-cols-xl-5' },
                { label: __( '6', 'egov' ), value: 'row-cols-xl-6' }
            ] }
        />
    ] )
}
export default RowColumns;