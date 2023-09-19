import React from 'react';

// Data Types supported by SwitchCase to check against.
type CaseTypes = string | number | boolean;

// when is the value to check.
type CaseProps<T extends CaseTypes> = {
  when: T;
  children: React.ReactNode;
};

// Default component to render if no Case matches.
type DefaultProps = {
  children: React.ReactNode;
};


// check is the value to check against.
type SwitchProps<T extends CaseTypes> = {
  check: T;
  children: React.ReactNode;
// defaultComponent?: React.ReactElement<DefaultProps>;
};

// Case component which will render if the "when" attribute is equal to "check" attribute of Switch
const Case = <T extends CaseTypes>({ children }: CaseProps<T>): React.ReactNode | null => {
  return <>{children}</>;
};

// Default component which will render if none of the cases are rendered
const Default = ({ children }: DefaultProps): React.ReactNode | null => {
  return <>{children}</>;
};

// Switch component that has 1 attribute which is the value that needs to be checked.
const Switch = <T extends CaseTypes>({ check, children, }: SwitchProps<T>): React.ReactNode | null => {
    let caseToRender = null;
    let defaultCase = null;

    React.Children.toArray(children).find((child)=>{
      // Check if the child of Switch case is a valid react element .
        if(React.isValidElement(child)){
          //Check if the element is Case component
          if(child.type=== Case){
              const caseChild = child as React.ReactElement<CaseProps<T>>;
                if(child.props.when===check){
                    caseToRender = caseChild.props.children;
                }
            }
            //Check if the element is a Default component
            else if(child.type === Default){
              const defaultChild = child as React.ReactElement<DefaultProps>
                defaultCase = defaultChild.props.children;
                console.log(defaultCase);
                
            }
        }
    })


    return <>{caseToRender || defaultCase}</>;
};

export { Switch, Case, Default };
