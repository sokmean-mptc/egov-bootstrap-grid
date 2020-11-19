import './style.scss'
import './editor.scss'
import MarkText from '../components/MarkText.jsx'
import RowColumns from '../components/RowColumns.jsx'
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls, RichText } = wp.blockEditor;
const { PanelBody, CheckboxControl } = wp.components;
const { Fragment } = wp.element;
const ALLOWED_BLOCKS = [ 'egov-bootstrap-grid/bootstrap-column' ]

registerBlockType( 'egov-bootstrap-grid/bootstrap-row', {
	title: __( 'Bootstrap Row', 'egov' ),
	icon: 'admin-page',
	category: 'egov', 
	keywords: [
		__( 'bootstrap row', 'egov' ),
		__( 'EgovBlock Bootstrap Row', 'egov' ),
		__( 'grid', 'egov' )
	],
	attributes: {
		mark_text: {
            type: 'string',
			default: 'Row'
		},
		row_cols: {
			type: 'string',
			default: ''
		}, 
		row_cols_sm: {
			type: 'string',
			default: ''
		}, 
		row_cols_md: {
			type: 'string',
			default: ''
		}, 
		row_cols_lg: {
			type: 'string',
			default: ''
		},
		 row_cols_xl: {
			type: 'string',
			default: ''
		},
		enable_gutter: {
			type: 'boolean',
			default: false
		},
		row_toggle_panel: {
			type: 'boolean',
			default: false
		}
	},
	edit: ( { attributes, setAttributes } ) => {
		const { mark_text, row_toggle_panel, enable_gutter } = attributes
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<MarkText
							attributes={attributes}
							setAttributes={setAttributes}
						/>
						<CheckboxControl
							label= { __( 'Enable No Gutter', 'egov' ) }
							checked={ enable_gutter }
							onChange={ ( value ) => {
								setAttributes( { enable_gutter: value })
							} }
						/>
					</PanelBody>
                    <PanelBody 
                        title={ __( 'Row Option', 'egov' ) } 
						initialOpen={ row_toggle_panel }
						onToggle={ () => {
							setAttributes( { row_toggle_panel: ! row_toggle_panel } ) 
						} }
                    >
						<RowColumns 
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ `border border-light p-3` }>
					<small>{ mark_text }</small>
					<InnerBlocks  
						allowedBlocks={ ALLOWED_BLOCKS }
					/>
				</div>
			</Fragment>
		)
	},
	
	save: ( { attributes } ) => { 
		const { enable_gutter, className, row_cols, row_cols_sm, row_cols_md, row_cols_lg, row_cols_xl } = attributes
		const advanced_class = className ? className : ''
		return (
			<div className={ `${enable_gutter ? 'no-gutters row' : 'row'} ${advanced_class} ${row_cols} ${row_cols_sm} ${row_cols_md} ${row_cols_lg} ${row_cols_xl} ` }>
				<InnerBlocks.Content />
			</div>
		)
	},
} );