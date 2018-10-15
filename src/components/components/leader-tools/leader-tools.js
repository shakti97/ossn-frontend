import React from 'react';

// local modules
import Layout2Col from './../../layouts/layout-2col/layout-2col';

const LeaderTool = (props) => {

  const title = props.tool.title;
  const icon = props.tool.icon;

  return (
    <a href="">
      <div> {icon} </div>
      <div> {title} </div>
    </a>
  )
}

export const LeaderToolList = (props) => {

  const title = props.title;

  const tools = props.tools.map((tool, i) => {
    return <LeaderTool tool={tool} key={i} />
  });


  console.log('leader tool set');
  console.log(props);

 return (
   <div>
     {title}
     <div>
       {tools}
     </div>
   </div>
 )
}

export const AllLeaderTools = (props) => {
  const variousTools = props.variousTools;
  const prManagement = props.prManagement;
  const codeOfConduct = props.codeOfConduct;
  const usefullResources = props.usefulResources;

  return (
    <Layout2Col>
      <div>
        <LeaderToolList title="Project Management Tools" tools={prManagement} />
        <LeaderToolList title="Code of conduct" tools={codeOfConduct} />
        <LeaderToolList title="Various tools" tools={variousTools} />
      </div>
      <div>
        <LeaderToolList title="Useful resources running a club"
                                                    tools={usefullResources} />
      </div>
    </Layout2Col>
  )
}
