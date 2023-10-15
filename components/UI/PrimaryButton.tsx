//? Define button properties
interface AccentButtonProperties {
  children: string;
  shouldSubmit?: true;
  onClickFunction?: () => void;
}

export function PrimaryButton({
  children,
  shouldSubmit, // Checa se esse botão vem de um formulário
  onClickFunction,
}: AccentButtonProperties) {
  return (
    <button
      class="primary-button"
      //? Submit the form?
      type={shouldSubmit === true ? "submit" : "button"}
      //? Submit form or handle the button in another way
      onClick={(event) => {
        //? For true form buttons, don't supress the default event and actually post the form
        if (shouldSubmit !== true) {
          event.preventDefault();
        }
        if (onClickFunction) {
          onClickFunction();
        }
      }}
    >
      {/* Renders children as pure text if needed, else create array of elements */}
      {children}
    </button>
  );
}
