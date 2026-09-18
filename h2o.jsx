import react from 'react';
import{FiUsers, FiFolder, FiTrendingUp, FiDollarSign}
from 'react-icons/fi;
import{Linechart, Line, XAxis, YAxis, Tooltip,ResponsiveContainer}
from 'recharts';
const stats=[
   { title:'Total Projects',value:
    12,icone:<FiFolder/>,change:'+20%'},
   { title:'Active Tasks',value:8,
     icone:<FiTrendingup/>,change: '+12%'}'
   { title:'Team Member',value:5,
     icone:<FiUsers/>,change:'+8%'},
   { title:'Total Revenue',value:"$2,480',icon:<FiDollarSign />,
     change:'+18%'},
];
