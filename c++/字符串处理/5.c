 void split_tring(const std::string& s, std::set<std::string>& v, const std::string& c)
{
    std::string::size_type pos1, pos2;
    pos2 = s.find(c);
    pos1 = 0;
    while(std::string::npos != pos2)
    {
      v.insert(s.substr(pos1, pos2-pos1));

      pos1 = pos2 + c.size();
      pos2 = s.find(c, pos1);
    }
    if(pos1 != s.length())
      v.insert(s.substr(pos1));
}
 
