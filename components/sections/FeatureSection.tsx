import ActionAreaCard from "../cards/ActionAreaCard"

export default function FeatureSection (){
    return(
        <div className="max-w items-center justify-around hidden md:flex">
            <ActionAreaCard 
             imagePath="/images/featureicon.png"
             title="Feature title" 
             desc="Feature description, feature description, feature description"/>
            <ActionAreaCard 
             imagePath="/images/featureicon.png"
             title="Feature title" 
             desc="Feature description, feature description, feature description"/>
            <ActionAreaCard 
             imagePath="/images/featureicon.png"
             title="Feature title" 
             desc="Feature description, feature description, feature description"/>
        </div>
    )
}