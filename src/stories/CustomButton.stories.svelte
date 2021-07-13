<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import CustomButton from './../components/custom-button/CustomButton.svelte';
</script>

<Meta
  title="Example/CustomButton"
  component={CustomButton}
  argTypes={{
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'onClick' },
  }}
/>

<Template let:args>
  <CustomButton {...args} on:click={args.onClick} />
</Template>

<Story
  name="Default"
  args={{
    disabled: false,
    label: 'Button',
  }}
/>

<Story
  name="Disabled"
  args={{
    disabled: true,
    label: 'Button',
  }}
/>
