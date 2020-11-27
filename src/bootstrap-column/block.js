import './style.scss'
import './editor.scss'
import MarkText from '../components/MarkText.jsx'
import Column from '../components/Column.jsx'
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element
const { PanelBody } = wp.components
const { InnerBlocks, InspectorControls, RichText } = wp.blockEditor;

registerBlockType( 'egov-bootstrap-grid/bootstrap-column', {
	title: __( 'Bootstrap Column', 'egov' ),
	icon: 'admin-page',
	category: 'egov-bootstrap-grid', 
	keywords: [
		__( 'bootstrap column', 'egov' ),
		__( 'grid', 'egov' ),
	],
	parent: [ 'egov-bootstrap-grid/bootstrap-row' ],
	attributes: {
		mark_text: {
            type: 'string',
			default: 'Column'
		},
		col: {
			type: 'string',
			default: 'col'
		},
		col_sm: {
			type: 'string',
			default: ''
		},
		col_md: {
			type: 'string',
			default: ''
		},
		col_lg: {
			type: 'string',
			default: ''
		},
		col_xl: {
			type: 'string',
			default: ''
		},
		column_toggle_panel: {
			type: 'boolean',
			default: false
		}
	},
	edit: ( { attributes, setAttributes } ) => {

		const { mark_text, column_toggle_panel } = attributes
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<MarkText
							attributes={attributes}
							setAttributes={setAttributes}
						/>
					</PanelBody>
                    <PanelBody 
                        title={ __( 'Column Option', 'egov' ) } 
						initialOpen={ column_toggle_panel }
						onToggle={ () => {
							setAttributes( { column_toggle_panel: ! column_toggle_panel } ) 
						} }
                    >
						<Column
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ `border border-light p-3` }>
					<small>{ mark_text }</small>
					<InnerBlocks />
				</div>
			</Fragment>
		);
	},
	
	save: ( { attributes } ) => {
		const { className, col, col_sm, col_md, col_lg, col_xl } = attributes
		const advanced_class = className ? className : ''
		return (
			<div className={ `${col} ${col_sm} ${col_md} ${col_lg} ${col_xl} ${advanced_class}` }>
				<InnerBlocks.Content />
			</div>
		)
	},
} );