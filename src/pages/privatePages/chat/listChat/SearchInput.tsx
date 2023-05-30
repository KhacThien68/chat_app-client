import { Input } from 'antd'
import { styled } from 'styled-components'
import tw from 'twin.macro'

const { Search } = Input

const SearchInput: React.FC = () => {
  const onSearch = (value: string) => console.log(value)
  return (
    <Container>
      <Search
        placeholder="Tìm kiếm"
        allowClear
        onSearch={onSearch}
        maxLength={50}
      />
    </Container>
  )
}

export default SearchInput

const Container = styled.div`
  ${tw`w-full p-2`}
`
