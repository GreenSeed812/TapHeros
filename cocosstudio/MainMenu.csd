<GameFile>
  <PropertyGroup Name="MainMenu" Type="Layer" ID="2c330ed6-3470-442f-b1c2-592009e5dee0" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Layer" Tag="22" ctype="GameLayerObjectData">
        <Size X="640.0000" Y="1136.0000" />
        <Children>
          <AbstractNodeData Name="Panel_BloodBar" ActionTag="-264003894" Tag="23" IconVisible="False" TopMargin="157.6749" BottomMargin="938.3251" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="40.0000" />
            <Children>
              <AbstractNodeData Name="Image_empty" ActionTag="1931803896" Tag="27" IconVisible="False" LeftMargin="207.0000" RightMargin="207.0000" TopMargin="9.0000" BottomMargin="9.0000" LeftEage="74" RightEage="74" TopEage="7" BottomEage="7" Scale9OriginX="74" Scale9OriginY="7" Scale9Width="78" Scale9Height="8" ctype="ImageViewObjectData">
                <Size X="226.0000" Y="22.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="20.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.3531" Y="0.5500" />
                <FileData Type="Normal" Path="ui/hp_tiao_red.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="BloodBar" ActionTag="-838753694" Tag="30" IconVisible="False" LeftMargin="207.0003" RightMargin="206.9997" TopMargin="9.0000" BottomMargin="9.0000" ProgressInfo="100" ctype="LoadingBarObjectData">
                <Size X="226.0000" Y="22.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0003" Y="20.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.3531" Y="0.5500" />
                <ImageFileData Type="Normal" Path="ui/hp_tiao_gr.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="MonsterBlood" ActionTag="563496273" Tag="16" IconVisible="False" LeftMargin="448.5000" RightMargin="168.5000" TopMargin="12.5000" BottomMargin="12.5000" LabelText="0Hp" ctype="TextBMFontObjectData">
                <Size X="23.0000" Y="15.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="460.0000" Y="20.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.7188" Y="0.5000" />
                <PreSize X="0.0359" Y="0.3750" />
              </AbstractNodeData>
              <AbstractNodeData Name="Text_MonsterName" ActionTag="-1605970941" Tag="17" IconVisible="False" LeftMargin="160.0000" RightMargin="440.0000" TopMargin="10.0000" BottomMargin="10.0000" FontSize="20" LabelText="Name" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="40.0000" Y="20.0000" />
                <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                <Position X="200.0000" Y="20.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.3125" Y="0.5000" />
                <PreSize X="0.0625" Y="0.5000" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="LoadingBar_Boss" ActionTag="1299540433" Tag="18" IconVisible="False" LeftMargin="220.0000" RightMargin="220.0000" TopMargin="34.0000" BottomMargin="-6.0000" ProgressInfo="100" ctype="LoadingBarObjectData">
                <Size X="200.0000" Y="12.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" />
                <PreSize X="0.3125" Y="0.3000" />
                <ImageFileData Type="Default" Path="Default/LoadingBarFile.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="BossTimeLeft" ActionTag="1149227585" Tag="19" IconVisible="False" LeftMargin="179.5000" RightMargin="429.5000" TopMargin="34.5000" BottomMargin="-9.5000" LabelText="00:00" ctype="TextBMFontObjectData">
                <Size X="31.0000" Y="15.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="195.0000" Y="-2.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.3047" Y="-0.0500" />
                <PreSize X="0.0484" Y="0.3750" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint />
            <Position Y="938.3251" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition Y="0.8260" />
            <PreSize X="1.0000" Y="0.0352" />
            <SingleColor A="255" R="150" G="200" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
          <AbstractNodeData Name="Panel_Stage" ActionTag="-1543784084" Tag="20" IconVisible="False" TopMargin="36.0000" BottomMargin="1000.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="100.0000" />
            <Children>
              <AbstractNodeData Name="PageStage_bg" ActionTag="-1694400578" Tag="22" IconVisible="False" LeftMargin="177.0000" RightMargin="177.0000" TopMargin="13.5000" BottomMargin="13.5000" LeftEage="94" RightEage="94" TopEage="24" BottomEage="24" Scale9OriginX="94" Scale9OriginY="24" Scale9Width="98" Scale9Height="25" ctype="ImageViewObjectData">
                <Size X="286.0000" Y="73.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="50.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.4469" Y="0.7300" />
                <FileData Type="Normal" Path="ui/bg_xiaoditu.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="Button_Set" ActionTag="493131455" Tag="21" IconVisible="False" LeftMargin="28.0000" RightMargin="536.0000" TopMargin="13.0000" BottomMargin="15.0000" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="46" Scale9Height="50" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="76.0000" Y="72.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="66.0000" Y="51.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.1031" Y="0.5100" />
                <PreSize X="0.1187" Y="0.7200" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="Normal" Path="ui/button_shezhi_s.png" Plist="" />
                <PressedFileData Type="Normal" Path="ui/button_shezhi_s.png" Plist="" />
                <NormalFileData Type="Normal" Path="ui/button_shezhi_n.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="Button_Boss" ActionTag="-129939681" VisibleForFrame="False" Tag="57" IconVisible="False" LeftMargin="487.0000" RightMargin="27.0000" TopMargin="16.0000" BottomMargin="16.0000" TouchEnable="True" FontSize="14" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="16" Scale9Height="14" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="126.0000" Y="68.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="550.0000" Y="50.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.8594" Y="0.5000" />
                <PreSize X="0.1969" Y="0.6800" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="Default" Path="Default/Button_Disable.png" Plist="" />
                <PressedFileData Type="Default" Path="Default/Button_Press.png" Plist="" />
                <NormalFileData Type="Default" Path="Default/Button_Normal.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="StageMonsterData" ActionTag="1276553733" Tag="59" IconVisible="False" LeftMargin="571.5000" RightMargin="51.5000" TopMargin="97.5000" BottomMargin="-12.5000" LabelText="0/0" ctype="TextBMFontObjectData">
                <Size X="17.0000" Y="15.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="580.0000" Y="-5.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="0" G="0" B="255" />
                <PrePosition X="0.9063" Y="-0.0500" />
                <PreSize X="0.0266" Y="0.1500" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="320.0000" Y="1050.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.9243" />
            <PreSize X="1.0000" Y="0.0880" />
            <SingleColor A="255" R="150" G="200" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
          <AbstractNodeData Name="Panel_Data" ActionTag="730266820" Tag="29" IconVisible="False" LeftMargin="-2.6200" RightMargin="2.6200" TopMargin="736.0000" BottomMargin="300.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="100.0000" />
            <Children>
              <AbstractNodeData Name="即时秒伤" ActionTag="-1894728647" Tag="60" IconVisible="False" LeftMargin="32.0000" RightMargin="512.0000" TopMargin="58.0000" BottomMargin="18.0000" FontSize="24" LabelText="即时秒伤" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="96.0000" Y="24.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="80.0000" Y="30.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.1250" Y="0.3000" />
                <PreSize X="0.1500" Y="0.2400" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="伙伴秒伤" ActionTag="-137697062" Tag="61" IconVisible="False" LeftMargin="516.0000" RightMargin="28.0000" TopMargin="58.0000" BottomMargin="18.0000" FontSize="24" LabelText="伙伴秒伤" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="96.0000" Y="24.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="564.0000" Y="30.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.8813" Y="0.3000" />
                <PreSize X="0.1500" Y="0.2400" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="点击伤害" ActionTag="-1870716853" Tag="62" IconVisible="False" LeftMargin="516.0000" RightMargin="28.0000" TopMargin="18.0000" BottomMargin="58.0000" FontSize="24" LabelText="点击伤害" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="96.0000" Y="24.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="564.0000" Y="70.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.8813" Y="0.7000" />
                <PreSize X="0.1500" Y="0.2400" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="总秒伤" ActionTag="-1197814604" Tag="63" IconVisible="False" LeftMargin="44.0000" RightMargin="524.0000" TopMargin="18.0000" BottomMargin="58.0000" FontSize="24" LabelText="总秒伤" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="72.0000" Y="24.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="80.0000" Y="70.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.1250" Y="0.7000" />
                <PreSize X="0.1125" Y="0.2400" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="FontLabelDPS" ActionTag="-1633917809" Tag="65" IconVisible="False" LeftMargin="476.5000" RightMargin="156.5000" TopMargin="62.5000" BottomMargin="22.5000" LabelText="0" ctype="TextBMFontObjectData">
                <Size X="7.0000" Y="15.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="480.0000" Y="30.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.7500" Y="0.3000" />
                <PreSize X="0.0109" Y="0.1500" />
              </AbstractNodeData>
              <AbstractNodeData Name="FontLabelTap" ActionTag="-813209903" Tag="67" IconVisible="False" LeftMargin="476.5000" RightMargin="156.5000" TopMargin="22.5000" BottomMargin="62.5000" LabelText="0" ctype="TextBMFontObjectData">
                <Size X="7.0000" Y="15.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="480.0000" Y="70.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.7500" Y="0.7000" />
                <PreSize X="0.0109" Y="0.1500" />
              </AbstractNodeData>
              <AbstractNodeData Name="FontLabelAllDPS" ActionTag="-893634748" Tag="68" IconVisible="False" LeftMargin="176.5000" RightMargin="456.5000" TopMargin="22.5000" BottomMargin="62.5000" LabelText="0" ctype="TextBMFontObjectData">
                <Size X="7.0000" Y="15.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="180.0000" Y="70.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.2813" Y="0.7000" />
                <PreSize X="0.0109" Y="0.1500" />
              </AbstractNodeData>
              <AbstractNodeData Name="FontLabelTestDPS" ActionTag="1923422602" Tag="69" IconVisible="False" LeftMargin="176.5000" RightMargin="456.5000" TopMargin="62.5000" BottomMargin="22.5000" LabelText="0" ctype="TextBMFontObjectData">
                <Size X="7.0000" Y="15.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="180.0000" Y="30.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.2813" Y="0.3000" />
                <PreSize X="0.0109" Y="0.1500" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint />
            <Position X="-2.6200" Y="300.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="-0.0041" Y="0.2641" />
            <PreSize X="1.0000" Y="0.0880" />
            <SingleColor A="255" R="150" G="200" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
          <AbstractNodeData Name="PanelSkill" ActionTag="-1094044612" Tag="49" IconVisible="False" TopMargin="876.0000" BottomMargin="140.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="120.0000" />
            <Children>
              <AbstractNodeData Name="ButtonSkill1" ActionTag="1136791592" Tag="50" IconVisible="False" LeftMargin="49.0000" RightMargin="489.0000" TopMargin="7.0000" BottomMargin="11.0000" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="72" Scale9Height="80" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="102.0000" Y="102.0000" />
                <Children>
                  <AbstractNodeData Name="Icon1" ActionTag="882119180" Tag="51" IconVisible="False" LeftMargin="-1.0000" RightMargin="1.0000" ctype="SpriteObjectData">
                    <Size X="102.0000" Y="102.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="50.0000" Y="51.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.4902" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="Normal" Path="ui/button_skill_sdd.png" Plist="" />
                    <BlendFunc Src="1" Dst="771" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="time" ActionTag="1039975137" Tag="52" IconVisible="False" LeftMargin="38.0000" RightMargin="40.0000" TopMargin="44.5000" BottomMargin="42.5000" LabelText="0:00" ctype="TextBMFontObjectData">
                    <Size X="24.0000" Y="15.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="50.0000" Y="50.0000" />
                    <Scale ScaleX="2.0000" ScaleY="2.0000" />
                    <CColor A="255" R="255" G="0" B="0" />
                    <PrePosition X="0.4902" Y="0.4902" />
                    <PreSize X="0.2353" Y="0.1471" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="100.0000" Y="62.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.1563" Y="0.5167" />
                <PreSize X="0.1594" Y="0.8500" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="Normal" Path="ui/button_skill.png" Plist="" />
                <PressedFileData Type="Normal" Path="ui/button_skill.png" Plist="" />
                <NormalFileData Type="Normal" Path="ui/button_skill.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="ButtonSkill2" ActionTag="-1551267879" Tag="53" IconVisible="False" LeftMargin="269.0000" RightMargin="269.0000" TopMargin="7.0000" BottomMargin="11.0000" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="72" Scale9Height="80" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="102.0000" Y="102.0000" />
                <Children>
                  <AbstractNodeData Name="Icon2" ActionTag="1123163882" Tag="54" IconVisible="False" LeftMargin="-1.0000" RightMargin="1.0000" ctype="SpriteObjectData">
                    <Size X="102.0000" Y="102.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="50.0000" Y="51.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.4902" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="Normal" Path="ui/button_skill_sdd.png" Plist="" />
                    <BlendFunc Src="1" Dst="771" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="time" ActionTag="469332779" Tag="55" IconVisible="False" LeftMargin="38.0000" RightMargin="40.0000" TopMargin="44.5000" BottomMargin="42.5000" LabelText="0:00" ctype="TextBMFontObjectData">
                    <Size X="24.0000" Y="15.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="50.0000" Y="50.0000" />
                    <Scale ScaleX="2.0000" ScaleY="2.0000" />
                    <CColor A="255" R="255" G="0" B="0" />
                    <PrePosition X="0.4902" Y="0.4902" />
                    <PreSize X="0.2353" Y="0.1471" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="62.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5167" />
                <PreSize X="0.1594" Y="0.8500" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="Normal" Path="ui/button_skill.png" Plist="" />
                <PressedFileData Type="Normal" Path="ui/button_skill.png" Plist="" />
                <NormalFileData Type="Normal" Path="ui/button_skill.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="ButtonSkill3" ActionTag="-1810808458" Tag="56" IconVisible="False" LeftMargin="489.0000" RightMargin="49.0000" TopMargin="7.0000" BottomMargin="11.0000" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="72" Scale9Height="80" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="102.0000" Y="102.0000" />
                <Children>
                  <AbstractNodeData Name="Icon3" ActionTag="42406318" Tag="57" IconVisible="False" LeftMargin="-1.0000" RightMargin="1.0000" ctype="SpriteObjectData">
                    <Size X="102.0000" Y="102.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="50.0000" Y="51.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.4902" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="Normal" Path="ui/button_skill_sdd.png" Plist="" />
                    <BlendFunc Src="1" Dst="771" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="time" ActionTag="1653467343" Tag="58" IconVisible="False" LeftMargin="38.0000" RightMargin="40.0000" TopMargin="44.5000" BottomMargin="42.5000" LabelText="0:00" ctype="TextBMFontObjectData">
                    <Size X="24.0000" Y="15.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="50.0000" Y="50.0000" />
                    <Scale ScaleX="2.0000" ScaleY="2.0000" />
                    <CColor A="255" R="255" G="0" B="0" />
                    <PrePosition X="0.4902" Y="0.4902" />
                    <PreSize X="0.2353" Y="0.1471" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="540.0000" Y="62.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.8438" Y="0.5167" />
                <PreSize X="0.1594" Y="0.8500" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="Normal" Path="ui/button_skill.png" Plist="" />
                <PressedFileData Type="Normal" Path="ui/button_skill.png" Plist="" />
                <NormalFileData Type="Normal" Path="ui/button_skill.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint />
            <Position Y="140.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition Y="0.1232" />
            <PreSize X="1.0000" Y="0.1056" />
            <SingleColor A="255" R="150" G="200" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
          <AbstractNodeData Name="ViewNode" ActionTag="466089642" Tag="41" IconVisible="True" LeftMargin="-7.8538" RightMargin="647.8538" TopMargin="1138.6180" BottomMargin="-2.6180" ctype="SingleNodeObjectData">
            <Size X="0.0000" Y="0.0000" />
            <AnchorPoint />
            <Position X="-7.8538" Y="-2.6180" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="-0.0123" Y="-0.0023" />
            <PreSize X="0.0000" Y="0.0000" />
          </AbstractNodeData>
          <AbstractNodeData Name="Panel_MainMenu" ActionTag="1712201602" Tag="37" IconVisible="False" LeftMargin="1.0000" RightMargin="-1.0000" TopMargin="1045.0000" BottomMargin="-1.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" LeftEage="211" RightEage="211" TopEage="30" BottomEage="30" Scale9OriginX="211" Scale9OriginY="30" Scale9Width="218" Scale9Height="32" ctype="PanelObjectData">
            <Size X="640.0000" Y="92.0000" />
            <Children>
              <AbstractNodeData Name="Main_Button1" ActionTag="-999949812" Tag="38" IconVisible="False" LeftMargin="32.0000" RightMargin="472.0000" TopMargin="-29.0000" BottomMargin="5.0000" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="4" BottomEage="4" Scale9OriginX="15" Scale9OriginY="4" Scale9Width="106" Scale9Height="108" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="136.0000" Y="116.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="100.0000" Y="63.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.1563" Y="0.6848" />
                <PreSize X="0.2125" Y="1.2609" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="Normal" Path="ui/button_yinxion_s.png" Plist="" />
                <PressedFileData Type="Normal" Path="ui/button_yinxion_s.png" Plist="" />
                <NormalFileData Type="Normal" Path="ui/button_yinxion_n.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="Main_Button2" ActionTag="650783172" Tag="39" IconVisible="False" LeftMargin="252.0000" RightMargin="252.0000" TopMargin="-29.0000" BottomMargin="5.0000" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="106" Scale9Height="94" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="136.0000" Y="116.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="63.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.6848" />
                <PreSize X="0.2125" Y="1.2609" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="Normal" Path="ui/button_shenqi_s.png" Plist="" />
                <PressedFileData Type="Normal" Path="ui/button_shenqi_s.png" Plist="" />
                <NormalFileData Type="Normal" Path="ui/button_shenqi_n.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="Main_Button3" ActionTag="-645903774" Tag="40" IconVisible="False" LeftMargin="472.0000" RightMargin="32.0000" TopMargin="-29.0000" BottomMargin="5.0000" TouchEnable="True" FontSize="14" ButtonText="Button" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="106" Scale9Height="94" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="136.0000" Y="116.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="540.0000" Y="63.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.8438" Y="0.6848" />
                <PreSize X="0.2125" Y="1.2609" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="Normal" Path="ui/button_shandian_s.png" Plist="" />
                <PressedFileData Type="Normal" Path="ui/button_shandian_s.png" Plist="" />
                <NormalFileData Type="Normal" Path="ui/button_shandian_n.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint />
            <Position X="1.0000" Y="-1.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.0016" Y="-0.0009" />
            <PreSize X="1.0000" Y="0.0810" />
            <FileData Type="Normal" Path="ui/bg_buuton.png" Plist="" />
            <SingleColor A="255" R="150" G="200" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>