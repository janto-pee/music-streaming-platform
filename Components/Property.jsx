import React from 'react'
import Image from 'next/image'
import millify from 'millify'
import { Box, Text, Flex, Badge, Button } from '@chakra-ui/react'
import header from '../assets/header2.jpg'
import {GoLocation} from 'react-icons/go'
import { AiFillCamera, AiFillVideoCamera, AiOutlineShareAlt} from 'react-icons/ai'
import { BiBed } from 'react-icons/bi'
import { TbBath } from 'react-icons/tb'
import { FcLandscape } from 'react-icons/fc'
import { MdOutlineFavoriteBorder, MdCompareArrows } from 'react-icons/md'
import Link from 'next/link'

const Property = ({comment, list}) => {
    const {
        area,
        videoCount,
        contactName,
        coverPhoto,
        agency,
        purpose,
        logo,
        baths,
        title,
        rooms,
        price,
        rentFrequency,
        externalID,
        completionStatus,
        score
      } = list;
    const placeholderText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos rerum nulla necessitatibus eius alias porro dolores'

    console.log(list)
  return (
    <Link href={`/house/${externalID}`} passHref>
        <Box bg='white' display='flex' flexDirection='column'>
            <Box position='relative' >
            <Image src={coverPhoto ? coverPhoto.url : header} alt='img' className='card-transform' width={400} height={260} />
            <Box>
                {
                    score > 99 ? <Badge position='absolute' top={2} left={2} colorScheme='red'>Featured</Badge> : null
                }
                <Flex gap={4} alignItems='center' position='absolute' top={2} right={2}>
                    <Badge variant='solid' colorScheme='blue' >{completionStatus}</Badge>
                    <Badge variant='solid' colorScheme='red' >{purpose}</Badge>
                </Flex>
                <Box display='flex' alignItems='center' gap={2} position='absolute' bottom={4} left={2} color='gray.100' > <GoLocation /> UAE </Box>
                <Flex position='absolute' gap={2} bottom={4} right={2} color='gray.100' alignItems='center'>
                    <AiFillCamera />
                    <AiFillVideoCamera />
                    <Text>{videoCount}</Text>
                </Flex>
            </Box>
            </Box>
            <Box textAlign='left' p={3}>
                <Text fontSize='lg' fontWeight={500} >{ title.length < 20 ? title : `${title.substring(0, 80)}...` }</Text>
                <Text my={2} fontSize='xl' color='red'>{price} <span style={{fontSize: '0.8rem'}}>{rentFrequency ? '/'+rentFrequency : null }</span></Text>
            {
                agency ? (<Text color='gray.500'>
                                Agency name: { agency.name }
                            </Text>): null
            }
                <Flex gap={4} mt={4} pb={6} borderBottom='1px solid lightGrey' color='gray.500'>
                    <Flex alignItems='center' gap={2}  ><BiBed /> <Text>{rooms}</Text></Flex>
                    <Flex alignItems='center' gap={2} ><TbBath /> <Text>{baths}</Text></Flex>
                    <Flex alignItems='center' gap={2} ><FcLandscape /><Text>{area && millify(area)}</Text></Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems='center' py={2}>
                    <Flex alignItems='center'>
                        <Image src={header} width='1rem' height='1rem' alt='img' />
                        <Text fontWeight={500}>{contactName}</Text>
                    </Flex>
                    <Flex gap={2}>
                        <AiOutlineShareAlt />
                        <MdOutlineFavoriteBorder />
                        <MdCompareArrows />
                    </Flex>
                </Flex>
            </Box>
            
        </Box>
    </Link>
  )
}

export default Property