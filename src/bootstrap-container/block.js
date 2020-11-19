import './style.scss'
import './editor.scss'
import MarkText from '../components/MarkText.jsx'
import ContainerOption from '../components/ContainerOption.jsx'
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
const { Fragment } = wp.element;

registerBlockType( 'egov-bootstrap-grid/bootstrap-container', {
	title: __( 'Bootstrap Container', 'egov' ),
	icon: 'admin-page',
    category: 'egov',
    keywords: [ __( 'bootstrap', 'egov' ), __( 'container', 'egov' ), __( 'egov', 'egov' ), __( 'grid system', 'egov' ) ],
	attributes: {
		mark_text: {
            type: 'string',
			default: 'Container'
        },
		container: {
			type: 'string',
			default: 'container'
		},
		container_toggle_panel: {
			type: 'boolean',
			default: false
		}
	},
	edit: ( { attributes, setAttributes } ) => {

		const { mark_text, container_toggle_panel } = attributes
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
						title={ __( 'Container Option', 'egov' ) } 
						initialOpen={ container_toggle_panel }
						onToggle={ () => {
							setAttributes( { container_toggle_panel: ! container_toggle_panel } ) 
						} }
					>
						<ContainerOption
							setAttributes={ setAttributes }
							attributes={ attributes }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ `border border-light p-3` }>
					<small>{ mark_text }</small>		
					<InnerBlocks />
				</div>
			</Fragment>
		)
	},
	
	save: ( { attributes } ) => {
		const { container, className } = attributes
		const advanced_class = className ? className : ''
		return (
			<div className={ `${container} ${advanced_class}` }>
				<InnerBlocks.Content />
			</div>
		)
	}
} )