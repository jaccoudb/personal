import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';
import type SvgIcon from '@mui/material/SvgIcon';
import type { CourseMaterial, CourseMaterialType } from '../../types/course-materials';
import { getMaterialUrl } from '../../services/courseMaterialsService';

type SvgIconComponent = typeof SvgIcon;

type MaterialCardProps = {
  material: CourseMaterial;
  openLabel: string;
  downloadLabel: string;
};

const materialIcons: Record<CourseMaterialType, SvgIconComponent> = {
  pdf: PictureAsPdfIcon,
  zip: FolderZipIcon,
  ppt: SlideshowIcon,
  pptx: SlideshowIcon,
  doc: InsertDriveFileIcon,
  docx: InsertDriveFileIcon,
  link: InsertDriveFileIcon,
};

export default function MaterialCard({ material, openLabel, downloadLabel }: MaterialCardProps) {
  const MaterialIcon = materialIcons[material.type];
  const materialUrl = getMaterialUrl(material.file);
  const typeLabel = material.type.toUpperCase();

  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: 4,
          borderColor: 'primary.main',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
          <Stack
            sx={(theme) => ({
              width: 44,
              height: 44,
              borderRadius: 1.5,
              alignItems: 'center',
              justifyContent: 'center',
              color: 'primary.main',
              bgcolor: 'rgba(25, 118, 210, 0.08)',
              ...theme.applyStyles('dark', {
                bgcolor: 'rgba(144, 202, 249, 0.12)',
              }),
            })}
          >
            <MaterialIcon />
          </Stack>

          <Stack spacing={1} sx={{ minWidth: 0 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.25 }}>
              {material.title}
            </Typography>
            <Chip label={typeLabel} size="small" variant="outlined" sx={{ width: 'fit-content' }} />
          </Stack>
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, gap: 1 }}>
        <Tooltip title={openLabel} arrow>
          <Button
            component="a"
            href={materialUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<OpenInNewIcon />}
          >
            {openLabel}
          </Button>
        </Tooltip>
        <Tooltip title={downloadLabel} arrow>
          <Button
            component="a"
            href={materialUrl}
            download
            size="small"
            variant="outlined"
            startIcon={<DownloadIcon />}
          >
            {downloadLabel}
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
